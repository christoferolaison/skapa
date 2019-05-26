const { lerna, git } = require('./util')

exports.command = 'publish'

exports.describe = `
 Publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function({ next }) {
  if (next) {
    lerna([
      'version',
      '--conventional-commits',
      '--conventional-prerelease',
      '--no-changelog',
      '--exact',
      '--message',
      'chore: prerelease',
      '--preid',
      git(['rev-parse', '--abbrev-ref', 'HEAD']),
    ])
    lerna(['publish', 'from-git', '--dist-tag', 'next'])
  }
}
