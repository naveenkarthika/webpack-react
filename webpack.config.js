const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
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
    }

}