export default defineNuxtConfig({
  extends: 'content-wind',
  ssr: true,
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
