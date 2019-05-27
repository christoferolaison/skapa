const { lerna, git, isCI } = require('./util')

exports.command = 'publish'

exports.describe = `
 Publish to npm
`

exports.builder = yargs => yargs.example('$0 publish')

exports.handler = async function({ next }) {
  const versionArgs = [
    'version',
    '--exact',
    '--message',
    'chore: prerelease',
  ]

  if (isCI()) {
    versionArgs.concat('--yes')
  }

  if (next) {
    versionArgs.concat(
      '--conventional-commits',
      '--conventional-prerelease',
      '--no-changelog',
      '--preid',
      git(['rev-parse', '--abbrev-ref', 'HEAD']),
    )
    lerna(versionArgs)
    lerna([
      'publish',
      'from-git',
      '--yes',
      '--dist-tag',
      'next',
    ])
  }
}
