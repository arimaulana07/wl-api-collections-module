declare module 'nuxt/schema' {
  interface RuntimeConfig {
    baseApiUrl: string,
    trailingApiUrl: string,
    grantType: string,
    clientId: string,
    clientSecret: string,
  }
}

export {}