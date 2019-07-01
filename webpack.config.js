const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: "./src/js/index.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        disable: true, 
                    },
                },
            ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            core: path.resolve(__dirname, 'src/core/'),
            root: path.resolve(__dirname, '')
        }
    }
};