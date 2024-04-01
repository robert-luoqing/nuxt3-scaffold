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
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@pinia/nuxt', '@ant-design-vue/nuxt', 'nuxt-icons', 'dayjs-nuxt', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/image'],
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
      meta: [{ name: 'description', content: 'beauty' }],
      bodyAttrs: {
        style: 'width: 100%;height: 100%;margin:0'
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
      apiHost: '',
      httpTimeout: 30000
    }
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.js', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    langDir: './locals',
    // sortRoutes: false,
    strategy: 'no_prefix',
    detectBrowserLanguage: false
  }
});
