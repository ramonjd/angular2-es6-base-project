/* eslint no-console: 0 */
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import http from 'http'


export default function(callback) {

    const app = express()

    app.set('env', process.env.NODE_ENV || 'dev')
    app.set('host', process.env.HOST || 'localhost')
    app.set('port', process.env.PORT || 3000)
    app.set('views', './src/views')
    app.set('view engine', 'jade')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    if (app.get('env') === 'prod') {
        app.use(express.static(path.join(__dirname, '/build/')))
    }

    app.get('/*', (req, res) => {
        res.status(200)
            .render('index',  {env : app.get('env')})
    })

    app.use((err, req, res, next) => {  // eslint-disable-line no-unused-vars
        console.log('Error on request %s %s', req.method, req.url)
        console.log(err)
        console.log(err.stack)
        res.status(500)
    })

    const httpServer = http.createServer(app).listen(app.get('port'), ()=>{
        callback(app)
    });

    return app

}
