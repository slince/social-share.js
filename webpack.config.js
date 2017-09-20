const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/social-share.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'social-share.min.js',
        libraryTarget: 'umd'
    },
    externals: {
        jquery: 'window.jQuery'
    },
    module: {
        rules: [
            { test: /\.css/, use: 'style-loader!css-loader' },
            { test: /\.scss/, use: 'style-loader!css-loader!sass-loader' },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:  'babel-loader?cacheDirectory=true',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        }
                    }
                ]
            }
        ]
    }

};