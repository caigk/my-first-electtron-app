const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = merge(common, {
	entry: {
		mainlib: './src/app/electron-main/main-lib.js'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs'
	},
	plugins: [
		new webpack.DefinePlugin({
			'ENV': JSON.stringify('local')
		})
	],
	resolve: {
		//配置别名，在项目中可缩减引用路径
		alias: {
			'@': path.resolve('src'),
			'&': path.resolve('src/components'),
			'api': path.resolve('src/api'),
			'assets': path.resolve('assets')
		},
	},
	target: "electron-main",
	externals: [
		nodeExternals()
	]
});