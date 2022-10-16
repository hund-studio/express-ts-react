const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./../config/webpack.config");

module.exports = merge(commonConfig, {
	entry: path.join(__dirname, "index.tsx"),
	output: {
		path: path.join(__dirname, "../public/dist"),
		filename: "client.js",
	},
});
