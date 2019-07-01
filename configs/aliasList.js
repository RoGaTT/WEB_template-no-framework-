const path = require('path')

module.exports = dirname => ({
    assets: path.resolve(dirname, 'src/assets'),
    images: path.resolve(dirname, 'src/assets/images'),
    fonts: path.resolve(dirname, 'src/assets/fonts'),
    src: path.resolve(dirname, 'src/'),
    js: path.resolve(dirname, 'src/js'),
    scss: path.resolve(dirname, 'src/scss'),
    html: path.resolve(dirname, 'src/html'),
})