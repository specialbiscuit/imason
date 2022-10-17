// const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750;
module.exports = {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 750,
      },
    },
  }
  