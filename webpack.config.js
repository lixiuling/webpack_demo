const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        demo1: path.resolve(__dirname, 'src/demo1/index.js')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/demo1'),
        hot: true,
        port: 3000,
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),//webpack4+废弃 生产模式会自动压缩
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        // new webpack.optimize.CommonsChunkPlugin({ //webpack4+废弃 改用optimization代替
        //     name: 'manifest'
        // }),
        new CleanWebpackPlugin(['dist/demo1']),
        new ExtractTextPlugin('[name].css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            name: 'manifest'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist/demo1'),
        filename: '[name].[hash].js', //[name].[chunkhash].js webpack4+不能用
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader', 'postcss-loader'],
                //publicPath:'../' //解决css背景图的路径问题
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
    }
};
