var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

var PORT = 9000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true,
  stats: { colors: true }
})
.listen(PORT, 'localhost', function () {
  console.log("Listening on " + PORT);
});
