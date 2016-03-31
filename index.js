require('babel-register');
var server = require('./server');
server.default(function (app) {
    console.log('Express %s server listening on %s:%s', app.get('env'), app.get('host'), app.get('port'));
    if (app.get('env') === 'dev') {
        require('./webpack/webpack.dev.server').default();
    }
});
