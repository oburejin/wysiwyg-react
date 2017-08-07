const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.base.js')
const path = require('path');

module.exports = (env) => {
    return webpackMerge(commonConfig(), {
        devtool: false,
        output: {
            path: path.resolve(__dirname, '../docs'),
        },
       
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin()
        ]
    })
}