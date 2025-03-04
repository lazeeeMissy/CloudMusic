const path = require('path')

// 拼接目录
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
  };