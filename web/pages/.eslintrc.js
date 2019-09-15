const skapaConfig = require('@skapa/config/eslint')

module.exports = {
  ...skapaConfig,
  rules: {
    'import/no-unused-modules': 0,
    'import/no-default-export': 0,
  },
}
