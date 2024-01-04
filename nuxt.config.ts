export default defineNuxtConfig({
  extends: 'content-wind',
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets',
  },
  colorMode: {
    preference: 'light',
  },
  content: {
    highlight: {
      theme: 'one-dark-pro',
    }
  }
})
