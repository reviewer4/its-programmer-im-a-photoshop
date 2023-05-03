const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 4 versions",
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.mp3$/,
        type: "asset/resource",
        generator: {
          filename: "audio/[name][ext]",
        },
      }
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js"],
      exclude: ["node_modules", "dist"],
      failOnError: true,
      eslintPath: require.resolve("eslint"),
      useEslintrc: false,
      overrideConfig: {
        extends: "airbnb-base",
        rules: {
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              js: "always",
              jsx: "always",
              ts: "always",
              tsx: "always",
            },
          ],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/img/favicon.png",
      mode: "webapp",
      devMode: "webapp",
      prefix: "images/",
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
          favicons: true,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
