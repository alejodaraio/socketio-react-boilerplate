var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        "./bin/app/app.js"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                include: __dirname,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: false
    }
};
