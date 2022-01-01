/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    // output: {
    //     filename: '[name].js',
    //     path: path.resolve(__dirname, 'build')
    // },
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    }, // using webpack-dev-server use devServer object instead of output
    devtool: 'source-map',
});