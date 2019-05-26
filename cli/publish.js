const { lerna, git } = require('./util')

exports.command = 'publish'

exports.describe = `
 Publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function(argv) {
  lerna([
    'version',
    '--conventional-commits',
    '--conventional-prerelease',
    '--no-changelog',
    '--exact',
    '--message',
    'chore: prerelease',
    '--preid',
    [
      'next',
      git(['rev-parse', 'HEAD']).substring(0, 6),
    ].join('-'),
  ])
  lerna(['publish', 'from-git', '--npm-tag', 'next'])
}
