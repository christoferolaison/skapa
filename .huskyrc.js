const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'eslint .',
      'jest',
      'pretty-quick --staged',
    ]),
  },
}
