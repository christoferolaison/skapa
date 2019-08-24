const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'eslint .',
      'jest --onlyChanged',
      'pretty-quick --staged',
    ]),
  },
}
