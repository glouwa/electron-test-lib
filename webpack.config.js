const path = require('path');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [ 'style-loader', 'css-loader' ],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ],
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
        }        
    ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),        
        //new DuplicatePackageCheckerPlugin(),
        //new MinifyPlugin(),        
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        //new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};