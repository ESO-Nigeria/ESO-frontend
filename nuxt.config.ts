// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    baseURL: process.env.NUXT_PUBLIC_PATH || '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale-1, user-scalable=0',
      title:
        '',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            '',
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        {
          hid: 'og-title',
          property: 'og:title',
          content:
            '',
        },
        {
          hid: 't-type',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-typed-router', // 'nuxt-typed-link',
  [
    '@pinia/nuxt',
    {
      autoImports: [['defineStore']],
    },
  ], 
  '@vueuse/nuxt', 
  'nuxt-simple-sitemap', 
  '@nuxtjs/tailwindcss', 
  'shadcn-nuxt', 
  'dayjs-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  routeRules: {    
    // Render these routes on the client (SPA)
    '/dashboard/**': { ssr: false },    

  },
})