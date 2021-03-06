const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = function (env = {}) {
  return {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
      index: './index.js',
    },
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'lib/[name].js',
    },
    devtool: 'sourcemap',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: getCssLoader(env),
        },
        {
          test: /\.html$/,
          use: getHtmlLoader(env),
        },
        {
          test: /\.(png|jpe?g|gif)(\?.*)?$/i,
          use: getUrlLoader('./images/[name].[ext]'),
        },
        {
          test: /\.(woff2?|eot|ttf)(\?.*)?$/i,
          use: getUrlLoader('./fonts/[name].[ext]'),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: getBabelLoader(env),
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
      }),
      new WebpackPwaManifest({
        name: 'Xin Example',
        short_name: 'Xin Example',
        description: 'My Xin Example!',
        background_color: '#3f51b5',
        theme_color: '#3f51b5',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          },
          {
            src: path.resolve('src/assets/large-icon.png'),
            size: '1024x1024', // you can also use the specifications pattern
          },
        ],
      }),
      new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' },
      ]),
    ],
    devServer: {
      compress: true,
      contentBase: path.join(__dirname, 'www'),
      host: '0.0.0.0',
      hot: false,
    },
  };
};

function getUrlLoader (name = '[name].[ext]') {
  return {
    loader: 'url-loader',
    options: {
      limit: 1000,
      name: name,
    },
  };
}

function getHtmlLoader () {
  return 'html-loader';
}

function getCssLoader () {
  return [ 'style-loader', 'css-loader', 'sass-loader' ];
}

function getBabelLoader () {
  let plugins = [
    'syntax-dynamic-import',
    // require.resolve('babel-plugin-transform-async-to-generator'),
  ];

  let presets = [
    // [ 'env' ],
  ];

  return {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      plugins,
      presets,
      cacheDirectory: true,
    },
  };
}
