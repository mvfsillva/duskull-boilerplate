const webpack = require('webpack')
const Server = require('webpack-dev-server')
const config = require('./webpack/dev.config')

const PORT = 3000

new Server(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true },
}).listen(PORT, err => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
})
