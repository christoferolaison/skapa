const { lerna, getWorkspaces } = require('./util')

exports.command = 'publish'

exports.describe = `
 Publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function(argv) {
  const packages = getWorkspaces()
  console.log(packages)
}
