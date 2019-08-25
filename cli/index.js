#!/usr/bin/env node
/* eslint-disable no-unused-expressions */

const yargs = require('yargs')

const globalKeys = ['help', 'version']

yargs
  .group(globalKeys, 'Global Options:')
  .command(require('./build'))
  .command(require('./publish'))
  .command(require('./clean'))
  .command(require('./deploy'))
  .help().argv
