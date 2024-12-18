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
        'Enterprise Support Organisations (ESO) Collaborative',
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
            'We are a group of Professionals providing support to MSMEs in Nigeria and building a stronger ecosystem',
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        {
          hid: 'og-title',
          property: 'og:title',
          content:
            'We are a group of Professionals providing support to MSMEs in Nigeria and building a stronger ecosystem',
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
  dayjs:{
    plugins: ['utc', 'localizedFormat'],
   },
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
    'general/**':{ ssr: false}
  },
  build: {
    transpile: ['@vuepic/vue-datepicker', 'vue-sonner']
},
  runtimeConfig:{
    public: {
      apiUrl: 'https://eso-nigeria-e4cfh7hpegawcjab.canadacentral-01.azurewebsites.net',
    }
  }
})