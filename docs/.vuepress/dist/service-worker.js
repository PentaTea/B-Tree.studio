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
    "revision": "19fd639a071e04ab158a6f79c44e7863"
  },
  {
    "url": "assets/css/0.styles.397a20f8.css",
    "revision": "15c885b77059b534f4a214e382226e56"
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
    "url": "assets/js/app.3a553f6b.js",
    "revision": "6867c4875e1ed9715a695fce5cb66c8c"
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
    "url": "assets/js/page-07fa8526.dcd6a08c.js",
    "revision": "e84d88a11fe740d72e09b9040bc9affa"
  },
  {
    "url": "assets/js/page-1301ab8a.acf9806b.js",
    "revision": "a000c6332989e9ad8b1c64f3ab28810b"
  },
  {
    "url": "assets/js/page-2037549c.314b9cef.js",
    "revision": "3c2be749cc8a82e966568db2fca6f594"
  },
  {
    "url": "assets/js/page-25b298b6.c7614ed2.js",
    "revision": "5286e8b8f3b284ef2752fc43a3a3de90"
  },
  {
    "url": "assets/js/page-3c041b9e.aab53feb.js",
    "revision": "e94a71d52ae63a1b6f628b541c5cb6a9"
  },
  {
    "url": "assets/js/page-65eaf5e4.288b1bc0.js",
    "revision": "0b16eff79081b410c01d59dd7c26b272"
  },
  {
    "url": "assets/js/page-a2896314.5f8e2100.js",
    "revision": "51c51f998c8a75e34c633eb07ebf9f20"
  },
  {
    "url": "assets/js/page-a7e2470e.a5ef9c2c.js",
    "revision": "450288ee2efd1a657b759533d4d7d58f"
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
    "revision": "8bdc5526c754e6d618fadef73afa11d2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "22531895a557771118a98fa853c9df99"
  },
  {
    "url": "guide/team/index.html",
    "revision": "6b6045d81c643c3c6b92e64f6e4def2f"
  },
  {
    "url": "index.html",
    "revision": "49f30fdbeb697a8ce574f106f561d976"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "e7dbef8bd777b1ddc0d6c06ee08ebd95"
  },
  {
    "url": "product/index.html",
    "revision": "a01a5f624be7935fa77492c137f27f4f"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "90929c64fb18dcb09881b5acd3b27957"
  },
  {
    "url": "resources/index.html",
    "revision": "753611607fd031cf3fdcdcd6a697a010"
  },
  {
    "url": "support/index.html",
    "revision": "fd0dfb5f3b1a276a958ab2073388da68"
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
