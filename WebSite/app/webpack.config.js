var path = require('path');
var webpack = require('webpack');


module.exports = {
  cache: true,
  entry: {
    app: "./app/app.js"
  },

  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },


  module: {
    loaders: [

     {
        test: /\.js$/,
        loader: 'babel-loader?stage=0'
      },

      {
        test: /\.jsx$/,
        loader: 'babel-loader?stage=0'
      },

      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loaders: ["react-hot", "babel"]
      }

]

}

}
