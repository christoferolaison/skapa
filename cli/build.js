const path = require('path')
const babel = require('rollup-plugin-babel')
const rollup = require('rollup')
const { getWorkspaces } = require('./util')

exports.command = 'build'

exports.describe = `
  Build
`

exports.builder = yargs => yargs.example('$0 build')

exports.handler = async function(argv) {
  getWorkspaces()
    .filter(({ shouldSkipCompile }) => !shouldSkipCompile)
    .forEach(async pkg => {
      const bundle = await rollup.rollup({
        input: path.resolve(pkg.location, pkg.src),
        plugins: [
          babel({
            presets: ['@babel/env', '@babel/react'],
            exclude: 'node_modules/**',
          }),
        ],
      })
      await Promise.all([
        bundle.write({
          file: path.resolve(pkg.location, pkg.main),
          format: 'cjs',
        }),
        bundle.write({
          file: path.resolve(pkg.location, pkg.module),
          format: 'esm',
        }),
      ])
    })
}
