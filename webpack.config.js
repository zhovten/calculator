const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        script: './src/index.js',
    },
    output: {

        // path: path.resolve(__dirname, '/dist/'),
        filename: './js/[name].js',
        path: path.join(__dirname, './dist'),
        // publicPath: '/',
    },
    devtool: "source-map",
    // devServer: {
    //     // contentBase: path.join(__dirname, './src/html/'),
    //     // contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000,
    //     // overlay: {
    //     //     warnings: false,
    //     //     errors: true
    //     // }
    // },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.scss$/i,
            use: [
                'style-loader',
                miniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true}
                },
                {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: './postcss.congig.js' }}
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true}
                }
            ]
        }]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: './css/style.css',
            chunkFilename: '[id].css'
        }),
        new htmlWebpackPlugin({
            hash: false,
            inject: false,
            template: './src/html/index.html',
            filename: './index.html'
        }),
    ],
};