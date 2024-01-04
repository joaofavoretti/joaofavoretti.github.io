export default defineNuxtConfig({
  extends: 'content-wind',
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  content: {
    highlight: {
      theme: 'one-dark-pro',
    }
  }
})
