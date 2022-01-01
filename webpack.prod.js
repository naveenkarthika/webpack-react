/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new CleanWebpackPlugin(), // clean build directory in rebuild
    ]

});