const path = require('path');

module.exports = {
    entry: {
        bundole: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,
            }
        ]
    }
}
