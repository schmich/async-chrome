const path = require("path");

module.exports = {
  entry: ["./src/index.js"],
  output: {
    library: "AsyncChrome",
    libraryExport: "default",
    libraryTarget: "window",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
