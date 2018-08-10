const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        //compress: true,
        contentBase: './dist',
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
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
    }
};
