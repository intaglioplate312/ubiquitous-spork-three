module.exports - {
    entry: './src/index.js',
    output: {
        path: __direname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    }
};