#!/usr/bin/env node
/* eslint-disable no-unused-expressions */

const yargs = require('yargs')
const execa = require('execa')

const lerna = args =>
  execa('lerna', args, { stdio: 'inherit' })

const globalKeys = ['help', 'version']

yargs
  .group(globalKeys, 'Global Options:')
  .command(
    '$0',
    '',
    () => {},
    argv => {
      console.log('\n')
      console.log('Welcome to skapa 🧤')
      console.log('\n')
    },
  )
  .command(
    'release',
    '',
    () => {},
    argv => {
      lerna(['list'])
    },
  )
  .help().argv
