const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const AssetsPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const node_env = process.env.NODE_ENV

const define = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(node_env)
  }
})

const extractCSS = new ExtractTextPlugin({
  filename: getPath =>
    getPath('css/[name].[contenthash:8].css').replace('css', '../css')
})

const assetsManifest = new AssetsPlugin({
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

const cleanBuild = new CleanWebpackPlugin([
  'static/assets/css/*',
  'static/assets/js/*'
])

const config = {
  entry: {
    main: path.join(__dirname, 'src/scripts', 'main.js')
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, 'static', 'assets', 'js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/scripts'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/stylesheets'),
        loader: extractCSS.extract({
          use: [
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
                plugins: [
                  autoprefixer({
                    browsers: ['> 1%', 'last 2 versions']
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve('node_modules/normalize.css'),
                  path.resolve('node_modules/hamburgers/_sass/hamburgers')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss']
  },
  plugins: [define, extractCSS, assetsManifest]
}

if (node_env === 'production') config.plugins.push(cleanBuild)

module.exports = config
