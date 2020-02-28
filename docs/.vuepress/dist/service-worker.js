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
    "revision": "bc1d78c027116d049ad42ed179d75932"
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
    "url": "assets/js/app.0d384db4.js",
    "revision": "9e9143a4d69711d06ca94df8efd48d9e"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-1301ab8a.1adb1888.js",
    "revision": "d670e14a106de5b369c651cea64ab512"
  },
  {
    "url": "assets/js/page-2037549c.16a7a823.js",
    "revision": "1f6faf17b472099edba114d4093648c3"
  },
  {
    "url": "assets/js/page-25b298b6.58884a1a.js",
    "revision": "48e8fc808b21233c22b9ed53f7c0b505"
  },
  {
    "url": "assets/js/page-3c041b9e.cda5826f.js",
    "revision": "a4f957f53bc115b1fac6048c9433af56"
  },
  {
    "url": "assets/js/page-5c740a65.4e956f3e.js",
    "revision": "0de85b5745e490bd35a10cd165a72cdd"
  },
  {
    "url": "assets/js/page-65eaf5e4.a7ce1702.js",
    "revision": "9ef1b8e277b71fe16b32192d6ee7e15d"
  },
  {
    "url": "assets/js/page-a2896314.6ccfff82.js",
    "revision": "8dd68e12f63e73f932ade55184d4f64f"
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
    "revision": "b935a8b985177af493a1b7c1a7e8f70e"
  },
  {
    "url": "doc/index.html",
    "revision": "f10e9d1c28829d91a6c41abf237b3468"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "0d1fa0ac0fe153084df565c97cc62f15"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d44f1cb5524f2fac32236f5a070aeac7"
  },
  {
    "url": "index.html",
    "revision": "4d63fefc0cfc937af4f2385c95d8ad02"
  },
  {
    "url": "product/index.html",
    "revision": "69aad6323aae73688b837e562401cfe1"
  },
  {
    "url": "resources/index.html",
    "revision": "708a03c4f98d6a2eb9872ef6f2793f48"
  },
  {
    "url": "support/index.html",
    "revision": "c579a166289b7339d4ff0f4644f1adc0"
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
