const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,

  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(4000000).maxAssetSize(4000000)
  }
})
