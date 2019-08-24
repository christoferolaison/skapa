const { lerna, git, isCI } = require('./util')

exports.command = 'publish'

exports.describe = `
  Tag and publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function({ next }) {
  const versionArgs = ['version', '--exact']
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
      git(['rev-parse', 'HEAD']).substring(0, 6),
      '--message',
      'chore: prerelease',
    )
    publishArgs.push('--dist-tag', 'next')
    lerna(versionArgs)
    lerna(publishArgs)
  } else {
    versionArgs.push(
      '--conventional-commits',
      '--message',
      'chore: release',
    )
    lerna(versionArgs)
    lerna(publishArgs)
  }
}
