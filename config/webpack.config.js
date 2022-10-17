const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (target) => {
	return {
		optimization: {
			minimize: true,
		},
		devtool: "source-map",
		resolve: {
			modules: ["node_modules"],
			extensions: [".tsx", ".ts", ".scss", ".svg"],
		},
		plugins: [new MiniCssExtractPlugin()],
		infrastructureLogging: {
			level: "error",
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								emit: target !== "server",
							},
						},
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[name]__[local]___[hash:base64:5]",
								},
							},
						},
						"sass-loader",
					],
				},
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: [{ loader: "@svgr/webpack", options: { typescript: true } }],
				},
			],
		},
	};
};
