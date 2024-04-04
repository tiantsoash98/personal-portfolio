// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: process.env.BASE_URL,
    name: 'Tiantsoa Rabemananjara | Freelance designer & Creative Developer',
    description: 'Web Designer & Creative Developer helping passionate people grow their business',
    defaultLocale: 'en',
  },
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
    '@nuxtjs/seo'
  ],
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    }
  },
})