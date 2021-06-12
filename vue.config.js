const webpack = require('webpack');

module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:10006',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        },
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    chainWebpack: config => {
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-pro.js')
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                'jquery': '$',
                echarts: 'echarts',
                axios: 'axios',
                'element-ui': 'ELEMENT',
                // nprogress: 'NProgress',
                // 'chart.js': 'Chart',
            })
        })
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
        })
    }
}
