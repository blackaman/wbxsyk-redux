const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const PAGE_PATH = path.resolve(APP_PATH, 'pages');
const TEMP_PATH = path.resolve(APP_PATH, 'template');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const DEBUG = !process.argv.includes('--release');

const plugins = [
  // 首页
  new HtmlWebpackPlugin({
    title: '相生一课',
    filename: 'index.html',
    template: path.resolve(TEMP_PATH, 'default.ejs'),
    chunks: ['test']
  }),
  // new UglifyJsPlugin({
  //   output: {
  //     comments: false
  //   },
  //   compress: {
  //     warnings: false
  //   }
  // }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = {
  entry: {
    test: path.resolve(APP_PATH, 'app.js')
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash].js'
  },
devtool: DEBUG ? 'eval-source-map' : false,
//   devtool: false,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: false
  },
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        test: /\.jsx?$/,
        enforce: 'pre',
        include: APP_PATH
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: APP_PATH
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      },
      {
        loader: 'html-loader',
        test: /\.html$/,
        include: APP_PATH
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [...plugins, extractLess],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
