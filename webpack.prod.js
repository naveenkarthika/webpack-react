/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(), // clean build directory in rebuild
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhites: true,
                    removeComments: true
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Inject style into dom
                    'css-loader' // Turns css into js
                ] // load reverse oreder
            }
        ]
    },

});