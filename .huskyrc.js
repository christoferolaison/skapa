const tasks = arr => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'eslint .',
      'pretty-quick --staged',
    ]),
  },
}
