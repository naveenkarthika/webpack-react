const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // Inject style into dom
                    'css-loader' // Turns css into js
                ] // load reverse oreder
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
            template: './src/index.html',
        })
    ]

}