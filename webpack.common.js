const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'none',
	// devServer: {
	// 	contentBase: './'
	// },
	resolve: {
		//配置别名，在项目中可缩减引用路径
		alias: {
			'@': path.resolve('src'),
			'&': path.resolve('src/components'),
			'api': path.resolve('src/api'),
			'assets': path.resolve('src/assets')
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(csv|tsv)$/,
				use: [
					'csv-loader'
				]
			},
			{
				test: /\.xml$/,
				use: [
					'xml-loader'
				]
			}
		]
	}
};