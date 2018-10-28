const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

const IS_DEV = process.env.NODE_ENV === 'dev';

const config = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : 'source-map',
  entry: {
    app: './src/index.js',
    about: './src/about/detail.js',
    project: './src/project/detail.js',
    service: './src/service/detail.js',
    video: './src/video/detail.js',
    news: './src/news/detail.js',
    team: './src/team/detail.js',
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.mp4/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimtetype: 'video/mp4',
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':video:src', ':data-src'],
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'windows.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin([
      {
        from: './public',
        to: 'public',
      },
    ]),
    new HtmlWebPackPlugin({
      template: 'index.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'app'],
      filename: 'index.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'about'],
      filename: 'about.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'project'],
      filename: 'project.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'service'],
      filename: 'service.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'video'],
      filename: 'video.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'news'],
      filename: 'news.html'
    }),
    new HtmlWebPackPlugin({
      template: './src/detail-template/detail.html',
      minify: !IS_DEV && {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        removeComments: true,
      },
      chunks: ['vendor', 'runtime', 'team'],
      filename: 'team.html'
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: false,
      allChunks: true
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    minimizer: [],
  },
};

// if (!IS_DEV) {
//   config.optimization.minimizer.push(
//     new UglifyJsPlugin({
//       sourceMap: false,
//     })
//   );
// }

module.exports = config;
