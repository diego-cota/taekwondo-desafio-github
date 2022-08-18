const path = require("path");
const { mainModule } = require("process");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presents: ["@label/present-env"],
            plugins: ["@label/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
