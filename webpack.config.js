const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const webpack = require('webpack');

const config = {

  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './main.js'
  },

  output: {
      filename: 'bundle.js',
      path: path.resolve(process.cwd(), 'build')
  },

  /*entry: "./app",

  /*output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), 'build')
  }*/

  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',

                  // Could also be write as follow:
                  // use: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                  use: [
                      {
                          loader: 'css-loader',
                          query: {
                              modules: true,
                              localIdentName: '[name]'
                          }
                      },
                      'postcss-loader'
                  ]
              }),
          },
          {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',

                  // Could also be write as follow:
                  // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
                  use: [
                      {
                          loader: 'css-loader',
                          query: {
                              modules: true,
                              sourceMap: true,
                              importLoaders: 2,
                              localIdentName: '[name]'
                          },
                      },
                      'sass-loader',
                      'postcss-loader'

                  ]
              }),
          },
          {
              test: /\.(jpg|jpeg|gif|png)$/,
              exclude: /node_modules/,
              loader:'url-loader?limit=1024&name=images/[name].[ext]'
          },
          {
              test: /\.(woff|woff2|eot|ttf|svg)$/,
              exclude: /node_modules/,
              loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
          }
      ],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },

  plugins: [
      new ExtractTextPlugin("style.css"),

      new HtmlWebpackPlugin({
          template: 'index.html',
          inject: true,
      }),

      /*new webpack.optimize.UglifyJsPlugin({
          compressor: { warnings: false }
      })*/


  ]
}
module.exports = config;
