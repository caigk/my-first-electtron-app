const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


module.exports = merge(common, {
	entry: {
		main: './src/app/electron-main/main.js'
	},
	devtool: 'inline-source-map',
	mode: 'development',
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			'ENV': JSON.stringify('local')
		})
	],
	resolve: {
		extensions: [ '.tsx', '.ts', '.js','.json' ],
		//配置别名，在项目中可缩减引用路径
		alias: {
			'@': path.resolve('src'),
			// '&': path.resolve('src/components'),
			// 'api': path.resolve('src/api'),
			// 'assets': path.resolve('assets')
		},
	},
	target: "electron-main",
	externals: [
		nodeExternals()
	]
});