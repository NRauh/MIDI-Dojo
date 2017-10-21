const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./app.js', './styles.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      title: 'MIDI Fun'
    })
  ]
};
