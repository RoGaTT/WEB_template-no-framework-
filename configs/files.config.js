module.exports = {
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