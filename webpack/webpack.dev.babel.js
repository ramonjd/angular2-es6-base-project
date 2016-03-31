/* eslint no-var: 0, no-console: 0 */

import path from 'path'
import webpack from 'webpack'
import WebpackErrorNotificationPlugin from 'webpack-error-notification'

const host = process.env.HOST || 'localhost';
const port = (process.env.PORT + 1) || 8888;

const config = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        path:  path.join(__dirname, '/build/'),
        publicPath: 'http://' + host + ':' + port + '/build/'
    },
    module: {
        loaders: [
            { test: /\.jade$/, loader: 'jade' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel?cacheDirectory'] },
            { test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] },
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' }
        ]
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('dev'),
                BROWSER: JSON.stringify(true)
            }
        }),
        new webpack.NoErrorsPlugin(),
        new WebpackErrorNotificationPlugin()

    ]

};

export default config
