import {defineConfig} from 'rollup';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import {resolve} from 'node:path';
import livereload from 'rollup-plugin-livereload';

const production = process.env.BUILD === 'production';

export default defineConfig({
    input: 'assets/js/index.js',
    output: {
        dir: 'assets/built',
        sourcemap: true,
        format: 'iife',
        plugins: production ? [terser()] : []
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        babel({babelHelpers: 'bundled'}),
        postcss({
            extract: true,
            sourceMap: true,
            plugins: [atImport(), postcssPresetEnv({})],
            minimize: production
        }),
        !production && livereload({
            watch: resolve('.'),
            extraExts: ['hbs'],
            exclusions: [resolve('node_modules'), resolve('assets/built'), resolve('.git')]
        })
    ]
});
