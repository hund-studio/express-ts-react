const path = require("path");
const nodeExternals = require("webpack-node-externals");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const commonConfig = require("./config/webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
	target: "node",
	externals: [nodeExternals()],
	entry: path.join(__dirname, "index.ts"),
	output: {
		path: path.join(__dirname, "bundle/server"),
		filename: "index.js",
	},
	plugins: [
		new FileManagerPlugin({
			events: {
				onEnd: {
					copy: [
						{
							source: path.join(__dirname, "views"),
							destination: path.join(__dirname, "bundle/server/views"),
						},
						{
							source: path.join(__dirname, "public"),
							destination: path.join(__dirname, "bundle/server/public"),
						},
						{
							source: path.join(__dirname, "package.json"),
							destination: path.join(__dirname, "bundle/server/package.json"),
						},
						{
							source: path.join(__dirname, ".env"),
							destination: path.join(__dirname, "bundle/server/.env"),
						},
					],
				},
			},
		}),
	],
});
