const register = (scriptPath, scope, waitControllerChange = true) => {
  if ('serviceWorker' in navigator) {
    const controllerChangePromise = new Promise(resolve => {
      navigator.serviceWorker.addEventListener('controllerchange', resolve)
    })

    return navigator.serviceWorker
      .register(scriptPath, { scope })
      .then(() => {
        console.log(`${scriptPath} is installed to "${scope}".`)
        return !waitControllerChange || navigator.serviceWorker.controller
          ? null
          : controllerChangePromise
      })
      .catch(console.error)
  }
}

const passedState = {
  debug: false,
  service: 'hub',
}

register(`/assets/worker.js?state=${JSON.stringify(passedState)}`, '/')
