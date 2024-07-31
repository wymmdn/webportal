const path = require('path')
const cracoLess = require('craco-less')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src')
        }
    },
    plugins: [
        {
            plugin: cracoLess,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#8b4513', // 例如，改变主题色
                            '@button-color': '#8b4513',
                            '@button-background-color': '#8b4513',
                            '@input-padding-vertical': '6px', // 自定义输入框的内边距
                            '@input-padding-horizontal': '8px',
                            // ... 其他需要自定义的 Less 变量
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}