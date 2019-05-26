const path = require('path')
const rimraf = require('rimraf')
const { getWorkspaces, getSkapaConfig } = require('./util')

exports.command = 'clean'

exports.describe = `
 Remove compiled files
`

exports.builder = yargs => yargs.example('$0 clean')

exports.handler = async function(argv) {
  const packages = getWorkspaces()
  const config = getSkapaConfig()
  packages.forEach(pkg => {
    rimraf.sync(
      path.resolve(pkg.location, config.distFolder),
    )
  })
}
