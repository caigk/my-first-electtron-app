const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


module.exports = merge(common, {
	entry: {
		renderer: path.resolve('src/app/electron-browser/index.js')
	},
	devtool: 'inline-source-map',
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('src/app/electron-browser/index.html'),
			title: '后台管理系统',
			//base: path.resolve('dist/')
		}),
		new webpack.ProvidePlugin({}),
		new webpack.DefinePlugin({ //这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。
			'ENV': JSON.stringify('renderer')
		})
	],
	resolve: {
		extensions: [ '.tsx', '.ts', '.js','.json' ],
		//配置别名，在项目中可缩减引用路径
		alias: {
			'@': path.resolve('src'),
			'&': path.resolve('src/components'),
			'api': path.resolve('src/api'),
			'assets': path.resolve('assets')
		},
	},
	module: {
		rules: [
			{
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader']
			},
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: ["style-loader", // 将 JS 字符串生成为 style 节点
					"css-loader", // 将 CSS 转化成 CommonJS 模块
					"sass-loader" // 将 Sass 编译成 CSS
				]
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
	},
	target: "electron-renderer",
	externals: [
		/mainlib/i,
		nodeExternals(),	//注意与主进程开放的对象有关，
	]
});