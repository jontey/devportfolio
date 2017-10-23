const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,

  entry: {
    index: [
      '../js/index.js'
    ]
  },

  module: {
    rules: [
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpg$|\.gif$/,
        loader: "file-loader"
      }, {
        test: /\.html$/,
        loader: "html-loader"
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html'
    }),
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default']
    })
  ]
};

module.exports = config;
