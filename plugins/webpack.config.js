const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
	},
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|less|sass)$/,
				use: [
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					'css-loader',
				],
			},
		],
	},
	plugins: [
    new HtmlWebpackPlugin({
      title: 'Plugins'
    }),
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
    }),
	],
};
