/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    }

});