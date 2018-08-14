const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        //contentBase: path.resolve(__dirname, 'dist'),
        //compress: true,
        contentBase: './views/demo1',
        hot: true,
        port: 3000,
    },
})