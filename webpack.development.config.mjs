import path from 'node:path';
import fileUrl from 'file-url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.dirname(fileUrl(import.meta.url));

const Config = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.mjs', '.json']
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(js|jsx|tsx|ts)$/, exclude: /node_modules/, loader: 'babel-loader'
            },
            { test: /\.(png|svg|jpe?g|gif)$/, use: [{loader: 'file-loader'}] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Deportes Hoy',
            filename: 'index.html'
        })
    ]
}

export default Config;