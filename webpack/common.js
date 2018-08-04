const { join } = require('path')

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  public: join(__dirname, '..', 'public'),
  build: join(__dirname, '..', 'build'),
}

module.exports = {
  paths,
  entry: {
    main: join(paths.src, 'index'),
  },

  output: {
    path: paths.build,
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
  },

  htmlPluginConfig: {
    title: 'Duskull',
    template: join(paths.public, 'index.html'),
  },

  cssLoader: {
    test: /\.css$/,
    include: paths.src,
    use: ['style-loader', 'css-loader'],
  },

  jsLoader: {
    test: /\.js$/,
    include: paths.src,
    use: [
      'react-hot-loader/webpack',
      {
        loader: 'babel-loader',
        options: {
          presets: [['env', { modules: false }], 'stage-0', 'react'],
          plugins: [
            'transform-decorators-legacy',
            'transform-decorators',
            [
              'transform-runtime',
              {
                helpers: false,
                polyfill: false,
                regenerator: true,
              },
            ],
          ],
        },
      },
    ],
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      options: {
        name: 'media/[name].[hash:8].[ext]',
      },
    },
  },

  urlLoader: {
    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]',
      },
    },
  },

  copyLoader: [
    {
      from: `${paths.public}/**/**`,
      ignore: ['*.html'],
      to: `${paths.build}/[name].[ext]`,
    },
  ],

  resolve: {
    alias: {
      src: paths.src,
    },
  },
}
