const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
	},
	devServer: {
		hot: true,
		open: true,
		port: 8080 || 8000,
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|less|sass)$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
	],
};
