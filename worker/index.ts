/// <reference path="../node_modules/types-serviceworker/index.d.ts" />
/// <reference path="../node_modules/types-serviceworker/lib/workbox.d.ts" />

// importScripts(
//   'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
// )

// workbox.clientsClaim()
// workbox.skipWaiting()

interface GlobalConfig {
  debug: boolean
  service: string
}

const stateParams = new URL(location.toString()).searchParams.get('state')
if (!stateParams) {
  throw new Error('No state params passed in the location')
}

const globalConfig: GlobalConfig = JSON.parse(stateParams)
// @ts-ignore
self.globalConfig = globalConfig

console.log(globalConfig)

// workbox.setConfig({ debug: globalConfig.debug })

console.log('Hello from Service Worker')

// workbox.routing.registerRoute('/', workbox.strategies.cacheFirst())
