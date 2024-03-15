const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'), // change this
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    static: "./build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ['babel-loader']
      },
      {
        test: /\.(gif|svg|jpg|png)$/,  // add whatever files you wanna use within this regEx
        exclude: /node_modules/, 
        use: ["file-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
    }),
  ]

};
