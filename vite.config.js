import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "globant-7rv",
    project: "javascript-react",
    url: 'https://globant-7rv.sentry.io/projects/javascript-react/?project=4506308996300800',
    authToken: 'tu_token_de_autenticación',
    release: {
      name: '1.0.0',
    },
  })],

  build: {
    sourcemap: true
  }
})