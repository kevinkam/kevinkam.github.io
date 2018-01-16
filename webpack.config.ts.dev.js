const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "source-map",
  entry: {
    bundle: "./src/js/index.tsx"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  watch: true,
  devServer: {
    publicPath: "/dist/",
    compress: true,
    port: 8080
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      images: path.resolve(__dirname, "src/images"),
      css: path.resolve(__dirname, "src/css")
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: path.join(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|otf|ttf|svg|eot)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: ["source-map-loader", "babel-loader"],
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js",
      minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.includes("node_modules")
      },
      chunks: ["bundle"]
    })
  ]
}
