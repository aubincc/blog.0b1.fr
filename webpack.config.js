const path = require("path");

module.exports = {
  mode: "development",                    // env: development, production, none  (optimisations)
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js"
  },
  target: "web",                          // "node" for backend, "web" for front end
  devServer: {
    port: "9500",                         // dev server port
    static: ["./public"],                 // static folder
    open: true,                           // open browser
    hot: false,                           // hot module replacement without page refresh
    liveReload: true                      // auto reload page in browser
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']  // js first
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,              // include js and jsx files in the process
        exclude: /node_modules/,          // not node_modules
        use: 'babel-loader'
      }
    ]
  }
}