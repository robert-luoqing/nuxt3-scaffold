// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss', 'animate.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;'
        }
      }
    }
  },
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@pinia/nuxt'],
  eslint: {
    checker: true,
    config: {
      standalone: false
    }
  },
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'affliate thinla' }],
      bodyAttrs: {
        style: 'width: 100%;height: 100%'
      }
    },

    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: [{ path: '~/views' }, '~/components'],
  imports: {
    dirs: ['composables', 'composables/**']
  },
  runtimeConfig: {
    public: {
      apiHost: 'https://api-test.thinla.com',
      httpTimeout: 30000
    }
  }
});
