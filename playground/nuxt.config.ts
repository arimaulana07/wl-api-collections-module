export default defineNuxtConfig({
  nitro: {
    storage: {
    }
  },
  runtimeConfig: {
    baseApiUrl: '',
    trailingApiUrl: '',
    grantType: '',
    clientId: '',
    clientSecret: '',
  },
  modules: ['@sidebase/nuxt-session', '../src/module'],
  myModule: {},
  devtools: { enabled: true }
})
