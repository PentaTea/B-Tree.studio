/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2297137a785cc29b7ad60ef33287bce5"
  },
  {
    "url": "assets/css/0.styles.18b7cab5.css",
    "revision": "e4d87151d420b502260d98b0b3f0c841"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/12.1497048e.js",
    "revision": "876966962f8ead61c077be6520167109"
  },
  {
    "url": "assets/js/13.89535952.js",
    "revision": "c444e15ffb2f121ec0e7ed93b04aa684"
  },
  {
    "url": "assets/js/14.81085ea8.js",
    "revision": "cc9d10e28ec13e55ae53e3c63f30b4a9"
  },
  {
    "url": "assets/js/15.96da0770.js",
    "revision": "748cc2b90e52eef069fa9e033bd3a225"
  },
  {
    "url": "assets/js/app.866a32fa.js",
    "revision": "af35f32c9766794c57bc3f6c2ae275dd"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-1301ab8a.d97d1e45.js",
    "revision": "059e691be284e172f648f50734f7b699"
  },
  {
    "url": "assets/js/page-2037549c.16a7a823.js",
    "revision": "1f6faf17b472099edba114d4093648c3"
  },
  {
    "url": "assets/js/page-25b298b6.dfed4d98.js",
    "revision": "f3cbdd809bf4e8ed7c69749d4aa1dd9a"
  },
  {
    "url": "assets/js/page-5c740a65.39165511.js",
    "revision": "352abdd7294f72ee8df9522b517aad41"
  },
  {
    "url": "assets/js/page-65eaf5e4.674fb5c9.js",
    "revision": "993deeaaa42475d699f2b86f5ffe47c4"
  },
  {
    "url": "assets/js/page-a2896314.50444dfa.js",
    "revision": "83aa724a16b53c80a5d628935e42b0c0"
  },
  {
    "url": "assets/js/page-d49eedf4.ac216a12.js",
    "revision": "f27201e3337523fdf47b33fd86be6d06"
  },
  {
    "url": "assets/js/page-e4dfaf94.697e4832.js",
    "revision": "79eed8998695f360c38c157c33fb81b9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7587e0f8.js",
    "revision": "1070bc21528d56cf395d1f5f330166fc"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/a/index.html",
    "revision": "f5cd0d05bd5a309ec50b7487f51a440a"
  },
  {
    "url": "doc/index.html",
    "revision": "bee2061958fbb9aec5915169f574919b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3ac8a5a6de02f643788376c639dd8853"
  },
  {
    "url": "index.html",
    "revision": "ebdaceeda03185d11b9e5924a4dbdc41"
  },
  {
    "url": "product/index.html",
    "revision": "04097280877231233d1d67f8704b3060"
  },
  {
    "url": "resources/index.html",
    "revision": "6ba0086a3be62ed70990cf393be9efc7"
  },
  {
    "url": "support/index.html",
    "revision": "e9fbd00e431f670229e3383bdb454bba"
  },
  {
    "url": "team/index.html",
    "revision": "7262ab23ae7634538a19bcff2f5dd99c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
