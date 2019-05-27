const { lerna, git, isCI } = require('./util')

exports.command = 'publish'

exports.describe = `
  Tag and publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function({ next }) {
  const versionArgs = [
    'version',
    '--exact',
    '--message',
    'chore: prerelease',
  ]
  const publishArgs = ['publish', 'from-git']
  if (isCI()) {
    versionArgs.push('--yes')
    publishArgs.push('--yes')
  }
  if (next) {
    versionArgs.push(
      '--conventional-commits',
      '--conventional-prerelease',
      '--no-changelog',
      '--preid',
      git(['rev-parse', '--abbrev-ref', 'HEAD']),
    )
    publishArgs.push('--dist-tag', 'next')
    lerna(versionArgs)
    lerna(publishArgs)
  }
}
