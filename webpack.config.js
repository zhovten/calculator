const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        script: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js',
        publicPath: '/dist/js'
    },
    devtool: "source-map",
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
                MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: '../css/style.css',
            chunkFilename: '[id].css'
        }),
    ],
};