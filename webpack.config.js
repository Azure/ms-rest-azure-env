const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './lib/azureEnvironment.ts',
  devtool: 'source-map',
  output: {
    filename: 'azureEnvironmentBundle.js',
    path: __dirname,
    libraryTarget: 'var',
    library: 'azureEnvironment'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|test)/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  node: {
    fs: false,
    net: false,
    path: false,
    dns: false,
    tls: false,
    tty: false,
    v8: false,
    Buffer: false
  }
};