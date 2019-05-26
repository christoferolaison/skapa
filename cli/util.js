const execa = require('execa')
const readPkg = require('read-pkg')
const findUp = require('find-up')

// const lerna = args =>
//   execa('lerna', args, { stdio: 'inherit' })

function lerna(args, opts = { stdio: 'inherit' }) {
  return execa.sync('lerna', args, opts).stdout
}

function getSkapaConfig() {
  const configPath = findUp.sync('skapa.config.js')
  return require(configPath)
}

function getWorkspaces() {
  const workspaces = JSON.parse(
    lerna(['list', '--all', '--json']),
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
  getWorkspaces,
  getSkapaConfig,
}
