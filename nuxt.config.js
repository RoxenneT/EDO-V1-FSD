export default {
  head: {
    title: 'Papers, Please',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['@nuxtjs/axios'],
  css: ['~/assets/css/tailwind.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {}
}
