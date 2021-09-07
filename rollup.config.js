
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';


const pkg = require('./package.json');

const libraryName = 'index';

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: libraryName, format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true }
  ],
  external: [
    'react',
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    // json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    babel(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
  ],
}