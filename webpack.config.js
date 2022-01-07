const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');

let mode = 'development'
if(process.env.NODE_ENV === 'production') mode = 'production'
console.log('mode ' + mode)

module.exports = {
	mode: mode,
	entry: {
		app: "./src/js/app.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		assetModuleFilename: "assets/[hash][ext][query]",
	},
	devtool: mode === 'development' ? "source-map" : "nosources-source-map",
	module: {
		rules: [
			{
				test: /\.pug/,
				use: "pug-loader",
			},
			{
				test: /\.styl$/,
				use: [
					(mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
						sourceMap: true,
						},
					},
					{
						loader: "stylus-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},

			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: mode === 'production' ? 'asset' : 'asset/resource',
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$|\.es6$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"],
					},
				},
			},
		],
	},
	devServer: {
		compress: true,
		open: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.pug",
			filename: "index.html",
			minify: false
		}),
		new MiniCssExtractPlugin({
			filename: "[name][chunkhash].css",
		})
	],
};
