const path = require("path")
const slsWebpack = require("serverless-webpack")
const nodeExternals = require("webpack-node-externals")

module.exports = {
  entry: slsWebpack.lib.entries,
  target: "node",
  mode: slsWebpack.lib.webpack.isLocal ? "development" : "production",
  devtool: slsWebpack.lib.webpack.isLocal ? "eval-source-map" : "source-map",
  externals: [nodeExternals()],
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
    sourceMapFilename: "[file].map",
  },
}
