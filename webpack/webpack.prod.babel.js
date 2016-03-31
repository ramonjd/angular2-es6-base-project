/* eslint no-var: 0, no-console: 0 */
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'


const config = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.min.js',
        path:  path.join(__dirname, '../build/')
    },
    module: {
        preLoaders: [
            // turned off for now, because it's annoying...
            // {
            //     test: /(\.js$)/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader'
            // }
        ],
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
          { test: /\.jade$/, loader: 'jade' },
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.scss$/, loader: ExtractTextPlugin.extract(
              'style',
              'css!sass')
           },
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('prod'),
                BROWSER: JSON.stringify(true)
            }
        })
    ]
}

export default config
