import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
    port: 5001,
    open: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{ loader: 'file-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Deportes Hoy',
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html'),
      inject: 'body'
    })
  ]
};

export default Config;
