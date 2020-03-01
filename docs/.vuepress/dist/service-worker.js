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
    "revision": "5bc3c425ba903a3b9ea943b33e1e46b2"
  },
  {
    "url": "assets/css/0.styles.35f0b4eb.css",
    "revision": "b282a438ad16b9a551801161bb422949"
  },
  {
    "url": "assets/img/alipay.6428fd00.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/14.b1868f4b.js",
    "revision": "fbd4f1594dd065f1c94c06dd3b576d2c"
  },
  {
    "url": "assets/js/15.f57da3a4.js",
    "revision": "266f456fcf614ef58cf048044ed6464d"
  },
  {
    "url": "assets/js/16.fa3ef0fa.js",
    "revision": "0c25564f7a31fdf38fc3e8f4a057b07c"
  },
  {
    "url": "assets/js/17.8343878d.js",
    "revision": "baccb5c77f3fd2fcc6f20d0907ee5fa6"
  },
  {
    "url": "assets/js/app.e43935c0.js",
    "revision": "201e98e1b8cf13db6dd0617666ae67e7"
  },
  {
    "url": "assets/js/layout-Layout.16ad8529.js",
    "revision": "a3f4b4e6f493686f1465d6a438c81557"
  },
  {
    "url": "assets/js/layout-NotFound.0b374b05.js",
    "revision": "29bccfcacba8eb8fff9cff7756576570"
  },
  {
    "url": "assets/js/page-07fa8526.c91d5be3.js",
    "revision": "a73fd6cf7b28b5c447639300b8f50396"
  },
  {
    "url": "assets/js/page-1301ab8a.607dfbd0.js",
    "revision": "29e6494cae3d5a2c0c4de192c0092dc4"
  },
  {
    "url": "assets/js/page-2037549c.11011b15.js",
    "revision": "b708115ea9c312be3ab7d2416ff035cb"
  },
  {
    "url": "assets/js/page-25b298b6.dbf3b520.js",
    "revision": "38851b8bd36f4919664846faf69577ff"
  },
  {
    "url": "assets/js/page-3c041b9e.9a91bd66.js",
    "revision": "39a3fda70ff161ab51a030b118ad027d"
  },
  {
    "url": "assets/js/page-65eaf5e4.288b1bc0.js",
    "revision": "0b16eff79081b410c01d59dd7c26b272"
  },
  {
    "url": "assets/js/page-a2896314.86dff4a7.js",
    "revision": "55b90046c13e303dbed27861bf9f7cd8"
  },
  {
    "url": "assets/js/page-a7e2470e.9a34c7da.js",
    "revision": "5e55dce0e7d761f8c903c099b742ac1d"
  },
  {
    "url": "assets/js/page-e4dfaf94.c9eef779.js",
    "revision": "232b05b810f1877669d9e4b4c311979e"
  },
  {
    "url": "assets/js/vendors~layout-Layout.41c1cfd0.js",
    "revision": "d48828dc9171f4f2d8c3e1a5b99a5402"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "doc/index.html",
    "revision": "26dd1509e5eb7331c24cdc925bc47389"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "9bba0b2b48eb9812f59201c181354a54"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4f0e0f4e25334cdbe42a3e64254ee053"
  },
  {
    "url": "index.html",
    "revision": "e0564d68ec858fdb2772b52115584f98"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "ef2950242ceaec58bbb93fa92261a944"
  },
  {
    "url": "product/index.html",
    "revision": "b553209e13953e240d50bf65e73b26b5"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "e8ba3352d4d3bfc3012ede4927d59691"
  },
  {
    "url": "resources/index.html",
    "revision": "360b674cdce0e005709b16a8de97a62c"
  },
  {
    "url": "support/index.html",
    "revision": "c729e03963b5e26ade250c712d6592be"
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
