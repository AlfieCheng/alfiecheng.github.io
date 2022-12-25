module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/js-form/dist'
      : '/'
  }