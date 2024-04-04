// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Tiantsoa Rabemananjara | Freelance designer & Creative Developer',
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
  ],
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  }
})
