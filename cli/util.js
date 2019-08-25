const execa = require('execa')
const readPkg = require('read-pkg')
const findUp = require('find-up')

function isCI() {
  const { GITHUB_ACTION } = process.env
  return Boolean(GITHUB_ACTION)
}

function lerna(args, opts = { stdio: 'inherit' }) {
  return execa.sync('lerna', args, opts).stdout
}

function git(args, opts) {
  return execa.sync('git', args, opts).stdout
}

function now(args, opts) {
  return execa.sync('now', args, opts).stdout
}

function getSkapaConfig() {
  const configPath = findUp.sync('skapa.config.js')
  return require(configPath)
}

function getWorkspaces() {
  const workspaces = JSON.parse(
    lerna(['list', '--all', '--json'], {}),
  )
  return workspaces.map(({ location }) => {
    const pkg = readPkg.sync({ cwd: location })
    const isPrivate = Boolean(pkg.private)
    return {
      location,
      name: pkg.name,
      isPrivate,
      src: pkg.src,
      main: pkg.main,
      module: pkg.module,
      shouldSkipCompile:
        isPrivate || Boolean(pkg.skipCompile),
    }
  })
}

module.exports = {
  lerna,
  git,
  now,
  isCI,
  getWorkspaces,
  getSkapaConfig,
}
