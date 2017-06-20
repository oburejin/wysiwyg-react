const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.base.js');


module.exports = (env) => {
    return webpackMerge(commonConfig(), {
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, '../src')
        },
        devServer: {
            contentBase: path.resolve(__dirname, '../src')
        }
    })
};
