const merge =  require('webpack-merge')
const baseconfig = require('./webpack.config.base')

module.exports = merge(baseconfig, {
    mode: 'development',
    devServer: {
        port: 9000
    },
    devtool: 'source-map'
})