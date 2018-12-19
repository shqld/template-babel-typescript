const register = () => {
  const babel = require('@babel/register')

  babel({
    extensions: ['.ts'],
    sourceMaps: 'both',
  })
}

register()
