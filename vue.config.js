module.exports = {
  // publicPath: '',
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/styles/variables.scss"
        `,
      },
    },
  },
};
