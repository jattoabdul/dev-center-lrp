importScripts('/dev-center-lrp/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/dev-center-lrp/_nuxt/1f0911d25b2a14c1307a.js",
    "revision": "a6ff5185dd6b99d76415ea38310433fe"
  },
  {
    "url": "/dev-center-lrp/_nuxt/9236b98125c2867fcad0.js",
    "revision": "ac016502426ba637ad31cfd68d46024d"
  },
  {
    "url": "/dev-center-lrp/_nuxt/dcb48828e0211ce5e56c.js",
    "revision": "9d54cbaf8545ffc7468e9fc30aef6a5d"
  },
  {
    "url": "/dev-center-lrp/_nuxt/f24d4dce7f0f21567312.js",
    "revision": "e029bac22ffbb8a1a80df171d5b50c28"
  }
], {
  "cacheId": "devcenter-lrp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/dev-center-lrp/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/dev-center-lrp/.*'), workbox.strategies.networkFirst({}), 'GET')
