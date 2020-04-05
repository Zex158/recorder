const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = (pathName) => path.resolve(process.cwd(), pathName)

function webpackCommonConfigCreator(options) {
  return {
    mode: options.mode,
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      filename: 'js/bundle.js',
      path: resolve('build'),
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.tsx?$/,
          exclude: /node_modules/,
          include: resolve('src'),
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
            emitError: true,
            fix: true, // 是否自动修复
          },
        },
        {
          test: /\.(js|jsx)$/,
          include: resolve('src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          include: resolve('src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-transform-runtime'],
              },
            },
            'ts-loader',
          ],
        },
        {
          test: /\.(css|scss)$/,
          include: resolve('src'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[path][name]_[local]--[hash:base64:5]',
                  },
                  localsConvention: 'camelCase',
                },
              },
              'sass-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('postcss-import')({
                      root: loader.resourcePath,
                    }),
                    require('autoprefixer')(),
                  ],
                },
              },
            ],
          }),
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                name: 'images/[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('public/index.html'),
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [resolve('build/'), resolve('dist/')],
      }),
      new ExtractTextPlugin({
        filename: 'css/[name][hash].css',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': resolve('src/'),
      },
    },
  }
}

module.exports = webpackCommonConfigCreator
