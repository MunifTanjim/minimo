const path = require('path')
const autoprefixer = require('autoprefixer')
const AssetsWebpackPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const assetsManifest = new AssetsWebpackPlugin({
  filename: 'assets.json',
  path: path.join(__dirname, 'data'),
  fullPath: false,
  processOutput: assets => {
    Object.keys(assets).forEach(bundle => {
      Object.keys(assets[bundle]).forEach(type => {
        let filename = assets[bundle][type]
        assets[bundle][type] = filename.slice(filename.indexOf(bundle))
      })
    })
    return JSON.stringify(assets, null, 2)
  }
})

const extractCSS = new MiniCSSExtractPlugin({
  filename: '../css/[name].[contenthash:8].css'
})

const cleanBuild = new CleanWebpackPlugin([
  'static/assets/css/*',
  'static/assets/js/*'
])

const node_env = process.env.NODE_ENV

const config = {
  mode: node_env === 'production' ? 'production' : 'development',
  entry: {
    main: path.join(__dirname, 'src/scripts', 'main.js'),
    algolia_search: path.join(__dirname, 'src/scripts/search', 'algolia.js'),
    fuse_search: path.join(__dirname, 'src/scripts/search', 'fuse.js'),
    lunr_search: path.join(__dirname, 'src/scripts/search', 'lunr.js')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, 'static', 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/scripts'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/stylesheets'),
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize:
                'production' === node_env
                  ? {
                      discardComments: {
                        removeAllButFirst: true
                      }
                    }
                  : false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss']
  },
  plugins: [extractCSS, assetsManifest]
}

if (node_env === 'production') config.plugins.push(cleanBuild)

module.exports = config
