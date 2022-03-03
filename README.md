# vite-dts

[![npm](https://img.shields.io/npm/v/vite-dts.svg)](https://www.npmjs.com/package/vite-dts)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

Generate a `.d.ts` module for both `.es` and `.cjs` entry points when using Vite's [lib mode](https://vitejs.dev/guide/build.html#library-mode). Instead of generating type definitions from your TypeScript source code (and bundling them), it assumes you will publish your source code, which means it can re-export from your TypeScript entry module. This improves performance drastically.

&nbsp;

### FAQ

- **Do I have to publish my `src` folder for this to work?**  
  Yes. For libraries, you generally need to do that anyway, if you publish sourcemaps (which you should).

- **Will this bundle my types?**  
  No. It merely re-exports from your library's entry module.

&nbsp;

### Usage

See the [`./demo/vite.config.js`](https://github.com/alloc/vite-dts/blob/master/demo/vite.config.js) file for more details.

```ts
import dts from 'vite-dts'

export default {
  plugins: [dts()],
}
```

#### Custom `d.ts` locations

By default, the output `d.ts` files will be based on the `main` and `module` entries of `package.json`. To use alternate paths, supply the `cjsModulePath` and `esModulePath` arguments to `dts()`.

```ts
import dts from 'vite-dts'

export default {
  plugins: [dts({
    cjsModulePath: 'dist/foo/bar.umd.d.ts',
    esModulePath: 'dist/foo/bar.es.d.ts'
  })],
}
```
