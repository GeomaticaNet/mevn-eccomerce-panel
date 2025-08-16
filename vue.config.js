module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.d\.ts$/,
                    use: 'null-loader',
                },
            ],
        },
    },
}