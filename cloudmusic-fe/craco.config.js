const path = require('path')
const CracoLessPlugin = require('craco-less')

// 拼接目录
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins:[{plugin: CracoLessPlugin}],
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
  };