const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'eslint .',
      'jest --changedSince master',
      'pretty-quick --staged',
    ]),
  },
}
