var path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'publ ic')
  },
  watch: true,
  module:{
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  }

}
