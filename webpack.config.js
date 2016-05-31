const webpack = require('webpack');
const path = require('path');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const NpmInstallPlugin = require('npm-install-webpack-plugin');

process.env.BABEL_ENV = TARGET;

module.exports = {
    entry: {
        app: PATHS.app
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new NpmInstallPlugin({
            save: true // --save
        })
    ],
    devtool: 'eval-source-map'
};