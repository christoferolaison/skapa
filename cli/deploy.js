const { git, isCI, now } = require('./util')

exports.command = 'deploy'

exports.describe = `
  Deploy applications
`

exports.builder = yargs => yargs.example('$0 deploy')

exports.handler = async function({ feature }) {
  const { ZEIT_TOKEN } = process.env
  if (feature) {
    now(['--token', ZEIT_TOKEN])
  } else {
    now(['--prod', '--token', ZEIT_TOKEN])
  }
}
