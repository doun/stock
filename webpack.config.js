var path = require('path');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

var ENV = process.env.ENV = process.env.NODE_ENV = 'development';

var metadata = {
  title: 'vue-typescript ts sample',
  host: 'localhost',
  port: 8080,
  ENV: ENV
};

module.exports = {
  devtool: 'source-map', //to point console errors to ts files instead of compiled js
  entry: {
    'main': './src/main.js', //app main file
  },
  output: {
    path: root('dist/js'),
    filename: 'dist.js'
  },
  resolve: {
    extensions: ['.ts', '.js','.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader',
      options:{
        loaders:{
          ts:{
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        }
      }
      },
      { test: /\.html$/, loader: 'raw-loader', exclude: [ './src/index.html' ] },
      { 
        test: /\.ts$/, 
        exclude: /node_modules/, 
        loader: "ts-loader" ,
        options:{
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  devServer: {
    port: metadata.port,
    host: metadata.host,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    contentBase: './src',
    open: true
  }
};
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
