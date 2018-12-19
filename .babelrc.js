const { readFileSync } = require('fs')
const { BABEL_ENV } = process.env

if (!BABEL_ENV) {
  throw new Error('No `BABEL_ENV` specified.')
}

module.exports = JSON.parse(readFileSync(`./${BABEL_ENV}.babelrc`))
