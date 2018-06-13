const sass = require('@stencil/sass')

exports.config = {
  globalStyle: 'src/global/app.scss',
  plugins: [sass()],
  collections: [{ name: 'stencil-fetch' }],
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
}
