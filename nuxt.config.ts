// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: process.env.BASE_URL,
    name: 'Tiantsoa Rabemananjara | Freelance designer & Creative Developer',
    description: "Hi, I am Tiantsoa, I focus on both web design and development, from concept to launch. Let's work together!",
    defaultLocale: 'en',
  },
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml
    '/secret/**': { robots: false },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: https://ogp.me/ns#'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        }
      ]
    }
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxtjs/seo'
  ],
  build: {
    transpile: ['gsap'],
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
    }
  },
})