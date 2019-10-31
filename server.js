const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const superagent = require('superagent');

function buildApp() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(helmet());
    app.use(compression());

    app.use(express.static(`${__dirname}/public`));

    const compiler = webpack({
        mode: 'production',
        entry: { client: './client.jsx' },
        output: { filename: '[name].js', publicPath: '/' },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.jsx', '.js']
                },
                options: {
                    presets: ['@babel/react']
                }
            }]
        }
    });
    app.use(webpackDevMiddleware(compiler, { stats: 'minimal' }));

    app.use('/api', (req, res) => {
        superagent
            .get(`https://api.yelp.com/v3/${req.url.slice(1)}`)
            .set('Authorization', `Bearer ${process.env.YELP_KEY}`)
            .then(response => res.status(response.status).send(response.text))
            .catch(err => res.status(404).send(`API call unsuccessful: ${err.text}`));
    });

    return app;
}

function startServer(app) {
    const server = app.listen(3000, () => {
        const host = server.address().address;
        const port = server.address().port;

        console.log(`[${new Date().toLocaleTimeString()}] Listening at http://${host}:${port}`);
    });
}

startServer(buildApp());
