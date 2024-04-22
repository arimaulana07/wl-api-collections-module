import { defineNuxtModule, addPlugin, createResolver, addServerHandler, addImports, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'wl-api-collections-module',
    configKey: 'wl-api-collections-module'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    await installModule('@pinia/nuxt');

    addServerHandler({
      route: '/api/token',
      handler: resolver.resolve('./runtime/server/api/token.post'),
    });

    addServerHandler({
      route: '/api/reservation/departure',
      handler: resolver.resolve('./runtime/server/api/reservation/departure.get'),
    });

    addServerHandler({
      route: '/api/reservation/destination',
      handler: resolver.resolve('./runtime/server/api/reservation/destination.get'),
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
