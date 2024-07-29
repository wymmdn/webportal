const path = require('path')
const cracoLess = require('craco-less')
const resolve = (dir) => path.resolve(__dirname,dir)

module.exports = {
    webpack:{
        alias:{
            '@':resolve('src')
        }
    }
}