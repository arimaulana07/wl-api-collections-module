import { defineNuxtModule, addPlugin, createResolver, addServerHandler, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addServerHandler({
      route: '/api/token',
      handler: resolver.resolve('./runtime/server/api/token.post.ts'),
    });

    addServerHandler({
      route: '/api/reservation/departure',
      handler: resolver.resolve('./runtime/server/api/reservation/departure.get.ts'),
    });

    addServerHandler({
      route: '/api/reservation/destination',
      handler: resolver.resolve('./runtime/server/api/reservation/destination.get.ts'),
    });

    addImports({
      name: 'useCustomFetch',
      as: 'useCustomFetch',
      from: resolver.resolve('runtime/composables/useCustomFetch'),
    });

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
