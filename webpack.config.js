const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/social-share.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'social-share.js'
    },
    module: {
        rules: [
            { test: /\.css/, use: 'style-loader!css-loader' },
            { test: /\.scss/, use: 'style-loader!css-loader!sass-loader' },
            { test: /\.(js|jsx)/, use: 'babel-loader' },
        ]
    }
};