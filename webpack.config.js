const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeModulesPaths = ['node_modules'];

const cssLoaders = [
  {loader: 'vue-style-loader'},
  {loader: 'css-loader'},
];

const scssLoaders = [
  {loader: 'vue-style-loader'},
  {loader: 'css-loader'},
  {
    loader: 'sass-loader',
    options: {
      includePaths: nodeModulesPaths
    }
  }
];

const sassLoaders = [
  {loader: 'vue-style-loader'},
  {loader: 'css-loader'},
  {
    loader: 'sass-loader',
    options: {
      includePaths: nodeModulesPaths,
      indentedSyntax: true
    }
  }
];

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.scss$/,
        use: scssLoaders
      },
      {
        test: /\.sass$/,
        use: sassLoaders
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            //'scss': 'vue-style-loader!css-loader!sass-loader',
            //'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            'scss': scssLoaders,
            'sass': sassLoaders

          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        include: /node_modules\/@material/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      hash: true,
      inject: true,
      chunksSortMode: 'dependency'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    watchOptions: {
      poll: true
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

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
      comments: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
