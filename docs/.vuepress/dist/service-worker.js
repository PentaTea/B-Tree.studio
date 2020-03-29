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
    "revision": "2b36788e1b00b1448cda536c48066cd4"
  },
  {
    "url": "assets/css/0.styles.3bdf9d1c.css",
    "revision": "6d56965365383d218f9699a592827e2b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
  },
  {
    "url": "assets/img/Q.jpg",
    "revision": "c502f270958073d8b732ad88890c0a34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/js/1.468b3d44.js",
    "revision": "438e1845c3a03e6224ebc5311d2a7d2a"
  },
  {
    "url": "assets/js/15.b6162f50.js",
    "revision": "3e4200e86626d94c8dbfc60632f723dc"
  },
  {
    "url": "assets/js/16.3ee7b6a6.js",
    "revision": "dd74a657163f59850ed653c5a2738e09"
  },
  {
    "url": "assets/js/17.6bc5f1d7.js",
    "revision": "a992f0ff84a1235e2c6bf89f5cc3d225"
  },
  {
    "url": "assets/js/18.802b0b56.js",
    "revision": "f65afa0eeac7916fa5a7fb86a40eca72"
  },
  {
    "url": "assets/js/19.3bc8690c.js",
    "revision": "a28f3e231e502f50c08cbdad46178856"
  },
  {
    "url": "assets/js/20.aa263bfa.js",
    "revision": "36dcd58c8e03f6c229f4d86f95dcd02f"
  },
  {
    "url": "assets/js/21.ed7d9cdc.js",
    "revision": "bd0ad859030ec9879f088c29f6404057"
  },
  {
    "url": "assets/js/22.fa90f58b.js",
    "revision": "2c0ec9535779619294581851f3e722ef"
  },
  {
    "url": "assets/js/23.dab6a865.js",
    "revision": "406084db3c34b6bb9d9fc1a2edb8f6b3"
  },
  {
    "url": "assets/js/24.e859a96e.js",
    "revision": "70908fd153c5c9ed08838a606a45cf54"
  },
  {
    "url": "assets/js/app.0793bb90.js",
    "revision": "088579069f78cd03ddb3588bdf30b207"
  },
  {
    "url": "assets/js/layout-Layout.1439d369.js",
    "revision": "d713cb3c2bd193d9da257950661ef893"
  },
  {
    "url": "assets/js/layout-NotFound.a3ff2dde.js",
    "revision": "52884a0c94a1508e84aed2ea8af6deb0"
  },
  {
    "url": "assets/js/page-1301ab8a.e2e14183.js",
    "revision": "1e38c877f6bedecad21908084f2e73a7"
  },
  {
    "url": "assets/js/page-142fd774.5e66fd87.js",
    "revision": "02b072cb6e81d52733c0f61f83f61464"
  },
  {
    "url": "assets/js/page-2037549c.8b181bae.js",
    "revision": "9b410f6c8d2082ff46e3e30ae3eab612"
  },
  {
    "url": "assets/js/page-22954010.8406d3e7.js",
    "revision": "8e8096fbb06614b159aab87b43f50cf5"
  },
  {
    "url": "assets/js/page-25b298b6.ba06d309.js",
    "revision": "6a5f3c10f9f80b9e4e5a40bc47c39bd6"
  },
  {
    "url": "assets/js/page-3c041b9e.3d3928bb.js",
    "revision": "a0d9353686e46e641918b62151b69e5c"
  },
  {
    "url": "assets/js/page-65eaf5e4.853c07b3.js",
    "revision": "b14963a49f363fca9e5e0dbf16f2209b"
  },
  {
    "url": "assets/js/page-7205f0b4.87afa57a.js",
    "revision": "521ddd9a97486dfa0904e2595ca2ba50"
  },
  {
    "url": "assets/js/page-e4dfaf94.806dbdc7.js",
    "revision": "edaa0f670065f421c83c7d5ae16bde43"
  },
  {
    "url": "assets/js/vendors~layout-Layout.32f4f743.js",
    "revision": "4f3fbd8f75e817e154b6afa3e64f2c47"
  },
  {
    "url": "assets/svg/PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "assets/svg/PCBRuler.svg",
    "revision": "0210ace36bdd454de56380f92b8a39d3"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "3b9f017f2bbc60e60667bf97a0131aaa"
  },
  {
    "url": "doc/index.html",
    "revision": "8b52a77c6519e0cadd7809df4774cd55"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "f7f799d03486f4a64a2a5205b1a6c3b4"
  },
  {
    "url": "guide/team/index.html",
    "revision": "5ea80c5644ecd98c3809f0db831135ff"
  },
  {
    "url": "index.html",
    "revision": "3899adeedb2cdc9bb6c0a518300c1c9b"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "e2c07ad4036c594fecde4cebf7dff800"
  },
  {
    "url": "py-list/index.html",
    "revision": "9cd7183d385ebe81c1f91a4492dfc6af"
  },
  {
    "url": "resources/index.html",
    "revision": "1f1acb81379d6f49962f616c04144dd7"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "4d7c0b0f659fb3e71a299e2a0affe188"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
