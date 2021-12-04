const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/app.[chunkhash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/public/index.html',
    }),
  ]
}
