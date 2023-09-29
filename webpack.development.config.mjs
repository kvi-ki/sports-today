import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const Config = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    open: true,
    hot: 'only'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin()],
    minimize: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Deportes Hoy',
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    })
  ]
};

export default Config;
