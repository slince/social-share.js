const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        'social-share.min': path.resolve(__dirname, 'src/social-share.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'SocialShare',
        libraryTarget: 'umd'
    },
    mode: isDev ? 'development': 'production',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        hot: true,
        port: 6000,
        https: false,
        headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": true }
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: 'source-map',
    resolve: {
        modules: [path.resolve(__dirname, './node_modules')],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
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
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './samples/index.html'),
            filename: 'index.html',
            showErrors: true,
            inject: true
        }),
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
    ],
};
