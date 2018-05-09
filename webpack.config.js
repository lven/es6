/**
 * Created by lven on 2018/5/9.
 */
module.exports = {
    entry: './@module/index02.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}