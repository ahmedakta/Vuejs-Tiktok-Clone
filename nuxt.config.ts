// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@pinia/nuxt",  '@pinia-plugin-persistedstate/nuxt'],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
});
