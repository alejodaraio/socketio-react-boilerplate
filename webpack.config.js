var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        "./app/client/index.jsx"
    ],
    output: {
        path: path.resolve(__dirname + "/public/dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015','react-hmre']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};