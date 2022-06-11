import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'tsup',
  target: 'node14',
  dts: {
    resolve: true,
    // build types for `src/index.ts` only
    // otherwise `Options` will not be exported by `tsup`,
    // not sure how this happens, probably a bug in rollup-plugin-dts
    entry: './src/index.ts',
  },
  clean: true,
  sourcemap: false,
  external: ['@chakra-ui/react', '@chakra-ui/system'],
  format: ['esm', 'cjs'],
  treeshake: 'smallest',
  inject: ['react-shim.js'],
});
