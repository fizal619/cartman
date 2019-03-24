const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				loader: 'babel-loader',
				include: [path.resolve(__dirname, 'src')],
				exclude:  [path.resolve(__dirname, 'node_modules')],
				query: {
					presets: ['@babel/react', '@babel/preset-env'],
					plugins: ['@babel/proposal-class-properties']
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	resolve: {
    extensions: ['.js', '.jsx']
  },

	output: {
		chunkFilename: '[name].js',
		filename: '[name].js'
	},

	mode: 'development',

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
