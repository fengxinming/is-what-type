import camelcase from 'camelcase';
import { build, defineConfig } from 'vite';
import combine from 'vite-plugin-combine';
import dts from 'vite-plugin-dts';
import external from 'vite-plugin-external';

import pkg from './package.json';

export default defineConfig({
  plugins: [
    combine({
      src: 'src/*.ts',
      target: 'src/index.ts'
    }),
    dts({
      tsconfigPath: './tsconfig.build.json'
    }),
    external({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies || {})
    }),
    {
      name: 'build-umd',
      closeBundle() {
        build({
          configFile: false,
          build: {
            emptyOutDir: false,
            // minify: false,
            lib: {
              formats: ['umd'],
              name: camelcase(pkg.name, { pascalCase: true }),
              fileName(format, entryName) {
                return `${entryName}.${format}.js`;
              },
              entry: 'dist/index.mjs'
            }
          }
        });
      }
    }
  ],
  resolve: {
    preserveSymlinks: true
  },
  build: {
    minify: false,
    lib: {
      formats: ['es', 'cjs'],
      fileName(format, entryName) {
        return `${entryName}${format === 'es' ? '.mjs' : '.js'}`;
      }
    }
  },
  test: {
    name: 'is-what-type',
    dir: './test'
  }
});
