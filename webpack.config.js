const path = require("path");
const nodeExternals = require("webpack-node-externals");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
  target: "node",
  externals: [nodeExternals()], // removes node_modules from your final bundle
  entry: "./dist/index.js", // make sure this matches the main root of your code
  output: {
    path: path.join(__dirname, "bundle/api"), // this can be any path and directory you want
    filename: "index.js",
  },
  optimization: {
    minimize: false, // enabling this reduces file size and readability
  },
  resolve: { modules: ["node_modules"] },
  plugins: [
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: path.join(__dirname, "views"),
              destination: path.join(__dirname, "bundle/api/views"),
            },
            {
              source: path.join(__dirname, "public"),
              destination: path.join(__dirname, "bundle/api/public"),
            },
            {
              source: path.join(__dirname, "package.json"),
              destination: path.join(__dirname, "bundle/api/package.json"),
            },
            {
              source: path.join(__dirname, "prisma"),
              destination: path.join(__dirname, "bundle/api/prisma"),
            },
            {
              source: path.join(__dirname, ".env"),
              destination: path.join(__dirname, "bundle/api/.env"),
            },
          ],
        },
      },
    }),
  ],
  target: "node",
};
