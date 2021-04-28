module.exports = {
  publicPath: './',//使用相对路径，防止打包上线可能导致资源加载失败
  assetsDir: 'assets',
  pages: {
    '0-home': {
      entry: 'src/pages/home/main.js',
      template: 'src/pages/home/index.html',
      pathname: 'index'
    },
    '1-detail': {
      entry: 'src/pages/mpa-one/detail/main.js',
      template: 'src/pages/mpa-one/detail/index.html',
      pathname: 'index'
    },
    '2-list': {
      entry: 'src/pages/mpa-one/list/main.js',
      template: 'src/pages/mpa-one/list/index.html',
      pathname: 'index'
    },
    '3-detail': {
      entry: 'src/pages/mpa-two/detail/main.js',
      template: 'src/pages/mpa-two/detail/index.html',
      pathname: 'index'
    },
    '4-list': {
      entry: 'src/pages/mpa-two/list/main.js',
      template: 'src/pages/mpa-two/list/index.html',
      pathname: 'index'
    },
    '5-spa-one': {
      entry: 'src/pages/spa-one/main.js',
      template: 'src/pages/spa-one/index.html',
      pathname: 'index'
    }
  }
}