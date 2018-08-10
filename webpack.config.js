const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'My Webpack'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'less-loader'
            }]
        },{
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: [
                'file-loader'
            ]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        },{
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        },{
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }]
    }
};
