import type { Plugin } from 'vite'
import loadJSON from 'load-json-file'
import * as path from 'path'

export default function dts(): Plugin {
  return {
    name: 'vite:dts',
    apply: 'build',
    async configResolved(config) {
      const { logger } = config
      const { outDir } = config.build

      const { entry, formats = ['es'] } = config.build.lib || {}
      if (!entry) {
        logger.warn(
          `[vite-dts] Expected "build.lib.entry" to exist in vite config`
        )
        return
      }

      const pkg = await loadJSON<any>(path.join(config.root, 'package.json'))

      if (!pkg.main && formats.includes('cjs')) {
        logger.warn(`[vite-dts] Expected "main" to exist in package.json`)
        return
      }
      if (!pkg.module && formats.includes('es')) {
        logger.warn(`[vite-dts] Expected "module" to exist in package.json`)
        return
      }

      const cjsModulePath = path.relative(outDir, pkg.main)
      const esModulePath = path.relative(outDir, pkg.module)

      const dtsModule = `export * from "${path.relative(
        path.resolve(config.root, outDir),
        path.resolve(config.root, entry).replace(/\.tsx?$/, '')
      )}"`

      this.generateBundle = function ({ entryFileNames }) {
        if (entryFileNames == cjsModulePath) {
          this.emitFile({
            type: 'asset',
            fileName: cjsModulePath.replace(/\.js$/, '.d.ts'),
            source: dtsModule,
          })
        } else if (entryFileNames == esModulePath) {
          this.emitFile({
            type: 'asset',
            fileName: esModulePath.replace(/\.js$/, '.d.ts'),
            source: dtsModule,
          })
        }
      }
    },
  }
}
