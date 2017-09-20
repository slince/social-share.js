const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
});

module.exports = {
    entry: {
        'social-share.min': path.resolve(__dirname, 'src/js/social-share.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'SocialShare',
        libraryTarget: 'umd'
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: 'source-map',
    module: {
        rules: [
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
                test: /\.(js|jsx)$/,
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
            },
            {
                test: /\.scss$/,
                use: extractSass.extract([ 'css-loader', 'sass-loader' ])
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        extractSass
    ]
};