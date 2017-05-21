const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
  filename: getPath => getPath('css/[name].css').replace('css', '../css')
})

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/scripts', 'main.js')
  },
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: '[name].js'
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
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.scss']
  },
  plugins: [extractCSS]
}
