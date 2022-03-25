const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: {
        'social-share': {
            import: path.resolve(__dirname, 'src/index.ts'),
            library: {
                name: 'SocialShare',
                type: "umd",
                export: 'SocialShare'
            },
        },
        'demo': {
            import: path.resolve(__dirname, 'samples/demo.ts')
        }
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? '[name].js' : '[name].min.js',
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
        jquery: 'jQuery',
        qrcode: 'QRCode'
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
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)$/,
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
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].min.css',
            chunkFilename: isDev ? '[id].css' : '[id].min.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './samples/index.html'),
            filename: 'index.html',
            showErrors: true,
            inject: true
        })
    ],
    optimization: {
        moduleIds: "named"
    }
};
