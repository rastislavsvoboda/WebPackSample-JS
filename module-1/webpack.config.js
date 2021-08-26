const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
// const { ModuleFederationPlugin } = require('webpack').container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '...']
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    clientLogLevel: 'error',
    port: 8081,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },  },
  plugins: [
    new VueLoaderPlugin(),
    // new ModuleFederationPlugin({
    //   name: "module1",
    //   filename: "remoteEntry.js",
    //   remotes: {},
    //   exposes: {
    //     // './App': './src/App.vue',
    //     './Search': './src/components/Search.vue',
    //     // './Taps': './src/components/Taps.vue',
    //     // './store': './src/store.ts',
    //   },
    //   shared: require("./package.json").dependencies,
    // }),
    new HtmlWebpackPlugin({
      title: 'Module1',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
}