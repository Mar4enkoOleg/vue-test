module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
