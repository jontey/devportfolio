const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,

  entry: {
    index: ['./js/index.js'],
  },

  output: {
    path: path.resolve('./static'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader'),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader'),
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png$|\.jpg$|\.gif$/,
        loader: "file-loader"
      }
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
  ]
};

module.exports = config;
