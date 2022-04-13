module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/Marvel-Worl' : '/',
  devServer: {
    disableHostCheck: true,
  }
}
