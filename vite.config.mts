import camelcase from 'camelcase';
import { build, defineConfig, Plugin } from 'vite';
import combine from 'vite-plugin-combine';
import dts from 'vite-plugin-dts';
import external from 'vite-plugin-external';

import pkg from './package.json';

function buildUMD() {
  let currentCmd: string;

  return {
    name: 'build-umd',
    config(config, { command }) {
      currentCmd = command;
    },
    closeBundle() {
      if (currentCmd !== 'build') {
        return;
      }
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
  } as Plugin;
}

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
      externalizeDeps: Object.keys((pkg as any).dependencies || {})
    }),
    buildUMD()
  ],
  resolve: {
    preserveSymlinks: true
  },
  build: {
    minify: false,
    lib: {
      entry: [],
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
