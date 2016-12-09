var nodeExternals = require('webpack-node-externals')
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  target: 'node',
  entry:
  {
    'cleaning': './js/handlers/cleaning.js',
  }, // buildの起点 (main)
  output: {
    libraryTarget: 'commonjs',
    path: './build',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'stage-0',
          ],
          plugins: [
            'transform-runtime',
            'add-module-exports'
          ]
        }
      }
    ]
  },
  externals: [
    // 'aws-sdk': 'aws-sdk',
    // we use webpack-node-externals to excludes all node deps.
    // You can manually set the externals too.
    nodeExternals()
  ]
  ,
  devtool: [
    {
      'cheap-module-eval-source-map' : true
    }
  ]
};
