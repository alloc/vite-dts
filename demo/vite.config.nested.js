// @ts-check
import { defineConfig } from 'vite'
import dts from 'vite-dts'

export default defineConfig({
  build: {
    outDir: 'dist/nested',
    lib: {
      entry: 'src/nested.tsx',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react'],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: 'esnext',
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [dts()],
})
