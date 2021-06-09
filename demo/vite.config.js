// @ts-check
import { defineConfig } from 'vite'
import dts from 'vite-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react'],
    },
    minify: false,
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [dts()],
})
