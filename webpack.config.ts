import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: "production",
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
    Buffer: false,
    process: false,
    stream: false
  }
};

export = config;