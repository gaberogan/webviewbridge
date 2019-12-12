const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './web/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'android/app/src/main/assets/web'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './web/src/template.html' }),
  ],
}