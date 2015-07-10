var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: {
    server: 'webpack-dev-server/client?http://localhost:9000',
    hot: 'webpack/hot/only-dev-server',
    bundle: './src/index'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: path.join(__dirname, 'src'),
        loaders: [
          'react-hot',
          'babel?optional[]=runtime&stage=0',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
