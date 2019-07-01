const path = require('path')

module.exports = [
    {
        test: /\.html$/,
        use: [
            // {
            //     loader: 'raw-loader'
            // },
            {
                loader: 'html-loader',
                options: {
                    interpolate: true
                }
            }
        ],
    },
]