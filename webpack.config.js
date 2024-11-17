const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

// Load the .env file
dotenv.config();

module.exports = {
  entry: "./index.js",
  mode: "production",

  output: {
    path: path.resolve(__dirname, "build"), // change this
    publicPath: "/",
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
    fallback: { process: require.resolve("process/browser") },
  },
  devServer: {
    static: "./build",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.(gif|svg|jpg|png)$/, // add whatever files you wanna use within this regEx
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Use the React preset
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html"),
    }),
    new webpack.ProvidePlugin({
      process: "process/browser.js",
    }),
  ],
};
