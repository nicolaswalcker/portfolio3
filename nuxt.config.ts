// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/content'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/scss/_breakpoints.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_global.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_reset.scss";
          @import "@/assets/scss/_transitions.scss";
          @import "@/assets/fonts/switzer/_switzer.scss";
          @import "@/assets/fonts/jetbrains/_jetbrains-mono.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      script: [
        {
          src: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0&display=swap',
          defer: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0&display=swap',
        },
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: 'https://raw.githubusercontent.com/nicolaswalcker/portfolio3/main/public/favicon.ico',
        },
      ],
      meta: [
        {
          name: 'keywords',
          content:
            'nuxt, vue, typescript, nicolas, walcker, nicolas walcker, web, sites, desenvolvimento, frontend, portfólio, nicolaswalcker',
        },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  plugins: ['~/plugins/userway.js'],
});
