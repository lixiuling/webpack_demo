const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: './src/demo1/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new CleanWebpackPlugin(['views/demo1']),
        //new ExtractTextPlugin("style.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, './views/demo1'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        },{
            test: /\.(png|svg|jpg|gif|jpeg)$/,
            use: ['file-loader']
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        },{
            test: /\.(csv|tsv)$/,
            use: ['csv-loader']
        },{
            test: /\.xml$/,
            use: ['xml-loader']
        }]
    },
};