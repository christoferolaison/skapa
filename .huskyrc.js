const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'eslint .',
      'flow check',
      'jest',
      'pretty-quick --staged',
    ]),
  },
}
