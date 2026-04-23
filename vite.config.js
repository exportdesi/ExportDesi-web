import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Transpile ??, ?. and other modern operators to Chrome 72-compatible
    // syntax so react-snap's bundled Puppeteer (Chromium ~72) can fully
    // execute JS during prerendering. No effect on real users — modern
    // browsers still get optimised code via Vite's module/nomodule split.
    target: 'chrome72',
  },
})
