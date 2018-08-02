const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Copy = require('copy-webpack-plugin')

module.exports = {
  entry: common.entry,
  output: common.output,

  plugins: [
    new CleanPlugin(['build'], { root: common.paths.root }),
    new ExtractTextPlugin({ filename: '[name]-[hash].css' }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) => /node_modules\/(react(-dom)?|fbjs)\//.test(resource),
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),

    new HtmlPlugin(
      Object.assign({}, common.htmlPluginConfig, {
        minify: { collapseWhitespace: true },

        chunksSortMode: (chunk1, chunk2) => {
          const order = ['react-build', 'vendor', 'main']
          const left = order.indexOf(chunk1.names[0])
          const right = order.indexOf(chunk2.names[0])
          return left - right
        },
      }),
    ),
    new Copy(common.copyLoader),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ].concat(process.env.ANALYZER ? new BundleAnalyzerPlugin() : []),

  module: {
    rules: [common.jsLoader, common.fileLoader, common.urlLoader],
  },
  resolve: common.resolve,
}
