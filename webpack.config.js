const path = require("path");
const { paths } = require('./conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const alias = require(`${paths.configs}/aliasList`)(__dirname)
const babelConfig = require(`${paths.configs}/babel.config`)
const stylesConfig = require(`${paths.configs}/styles.config`)
const filesConfig = require(`${paths.configs}/files.config`)
const htmlConfig = require(`${paths.configs}/html.config`)
const fs = require('fs')

const generateHtmlPlugins = (templateDir) => {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: true,
            hash: true
        })
    })
}

const htmlPlugins = generateHtmlPlugins('src/html/views')

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: paths.build,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: paths.public
    },
    module: {
        rules: [
            babelConfig,
            stylesConfig,
            filesConfig,
            ...htmlConfig
        ]
    },
    plugins: [
        
    ].concat(htmlPlugins),
    resolve: {
        alias
    }
};