var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {test: /\.(js)$/, use: 'babel-loader' },
            {test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            {test: /\.svg$/, use: [{ loader: "babel-loader" }, { loader: "react-svg-loader", options: { jsx: true }}]}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    mode: 'development'
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env' : {
                'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    );
}

module.exports = config;