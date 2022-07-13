module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    'postcss-pxtorem': {
      // 解构文件路径
      rootValue ({ file }) {
        // 文件路径中查找vant  若没有则返回-1 返回75  若有则是vant 以37.5为基础
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
