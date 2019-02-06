const md5File = require('md5-file')
const path = require('path')
// css styles will be imported on load and that complicates matters... ignore them
const ignoreStyles = require('ignore-styles')

const register = ignoreStyles.default

// we also want to ignore all image requests
// when running locally these will load from a standard import
// when running on the server, we want to load via their hashed version in the build folder
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg']

// override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  if (!extensions.find(f => filename.endsWith(f))) {
    // if we find a style
    return ignoreStyles.noOp()
  }
  // if we find an image
  const hash = md5File.sync(filename).slice(0, 8)
  const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)

  // const bn = path.basename(filename).replace(/(\.\w{3})$/, `${hash}$1`)
  // const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`)

  mod.exports = `/static/media/${bn}`
})

// set up babel to do its thing... env for the latest toys, react-app for CRA
// notice 3 plugins: the first two allow us to use improt rather than require, the third is for code splitting
// polufill is required for babel 7, polyfill includes a custom regenerator runtime and core-js
require('@babel/polyfill')
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel'
  ],
  extensions: ['.ts', '.js', '.jsx', '.tsx']
})

// load up the server entry point
require('./server')
