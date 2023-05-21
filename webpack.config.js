const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpack = require('compression-webpack-plugin');

module.exports = {
	entry: './index.js',
	module: {
		rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource'
      }
    ]
	},
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new VueLoaderPlugin(),
    new CompressionWebpack()
  ]
}
