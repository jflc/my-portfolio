module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/my-portfolio/'
    : '/',
  css: {
    modules: true,
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        includePaths: ['./node_modules']
      }
    }
  }
}
