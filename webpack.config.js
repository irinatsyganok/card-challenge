var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        }
    })
  ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};