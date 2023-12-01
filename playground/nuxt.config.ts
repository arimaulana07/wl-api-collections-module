export default defineNuxtConfig({
  runtimeConfig: {
    baseApiUrl: '',
    trailingApiUrl: '',
    grantType: '',
    clientId: '',
    clientSecret: '',
  },
  modules: ['../src/module'],
  myModule: {},
  devtools: { enabled: true }
})
