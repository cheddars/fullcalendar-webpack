const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'),
        inject: false,
        filename: path.join(__dirname, './dist/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: false,
    port: 9000
  }
}

