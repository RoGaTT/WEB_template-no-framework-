const autoprefixer = require('autoprefixer')

module.exports = {
    test: /\.s[ac]{1}ss$/,
    use: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader'
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    autoprefixer({
                        overrideBrowserlist: ['ie >= 8', 'last 4 version']
                    })
                ],
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader'
        },
    ]
}