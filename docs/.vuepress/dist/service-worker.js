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
    "revision": "4e397aace28b275f4d9d22104e2f9c9e"
  },
  {
    "url": "assets/css/0.styles.c3dbb1a4.css",
    "revision": "da586ab5861d09517a06bd5d78b33c76"
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
    "url": "assets/js/16.d6e88136.js",
    "revision": "6239fce062e8b62bafdf8b2b9c4422a4"
  },
  {
    "url": "assets/js/17.5c1a565d.js",
    "revision": "f2257d98455caa52cf308d12909b9396"
  },
  {
    "url": "assets/js/18.940f6c43.js",
    "revision": "5cbec0a16d0b2c4725bb54429ceacd09"
  },
  {
    "url": "assets/js/19.68d83651.js",
    "revision": "cefb6688bb7ecc84b976a0ecfbf25ee7"
  },
  {
    "url": "assets/js/20.4cf0c3ff.js",
    "revision": "efcbc9b70b93bc5823080098624eef91"
  },
  {
    "url": "assets/js/21.7d3273d4.js",
    "revision": "e5ab00e985cf8f201799f35fb4466ff5"
  },
  {
    "url": "assets/js/22.167c0382.js",
    "revision": "9b7faccc2446e7e55b674c753ec8ee35"
  },
  {
    "url": "assets/js/23.e977b9e9.js",
    "revision": "3849ddb924d62ac8b81aad62955185a4"
  },
  {
    "url": "assets/js/24.6f643e4c.js",
    "revision": "06ee1879f8508f39fb57e2fcb0c2abc7"
  },
  {
    "url": "assets/js/25.052d932a.js",
    "revision": "bc2e045ad07437525f65f465202eba39"
  },
  {
    "url": "assets/js/app.ff69fda1.js",
    "revision": "51fad2570468a5fe801511be26a31f19"
  },
  {
    "url": "assets/js/layout-Layout.fccd6451.js",
    "revision": "9eab1e59d3d4c2bdd4988f021b5b0705"
  },
  {
    "url": "assets/js/layout-NotFound.ff9f5e01.js",
    "revision": "8282ae336798f055b5c2a3a84677b0fa"
  },
  {
    "url": "assets/js/page-07fa8526.19a5ab1e.js",
    "revision": "57fa2b0b731a1c2258ec690bee521758"
  },
  {
    "url": "assets/js/page-1301ab8a.e5d1416d.js",
    "revision": "a88ad32724676a9ee4ab9e1ad1c4ca19"
  },
  {
    "url": "assets/js/page-2037549c.1a02d80a.js",
    "revision": "f700603969514ef2416e95dd4dd9f4f0"
  },
  {
    "url": "assets/js/page-22954010.251d8c4c.js",
    "revision": "7f650dd4c60cf4bac8a29c53085ef9fa"
  },
  {
    "url": "assets/js/page-25b298b6.d883db69.js",
    "revision": "21d48e5b931df986fb17b0e988be984a"
  },
  {
    "url": "assets/js/page-3c041b9e.80e05b96.js",
    "revision": "3ade6592fcea2a4312dffbea922f7830"
  },
  {
    "url": "assets/js/page-65eaf5e4.dba10012.js",
    "revision": "80a11331c6c32ce950a3db3b577f6ce1"
  },
  {
    "url": "assets/js/page-7205f0b4.d53b418f.js",
    "revision": "18ecd94365612a6303040fa0ef88f8ba"
  },
  {
    "url": "assets/js/page-a2896314.2cafa226.js",
    "revision": "2b8366c4b39d1bdb0c1031cd66f87228"
  },
  {
    "url": "assets/js/page-a7e2470e.5318876d.js",
    "revision": "e17e0ddb4f6f44d214de86a45328df40"
  },
  {
    "url": "assets/js/page-e4dfaf94.71a82ebc.js",
    "revision": "dd93ce0ebd490afb7ea5e30f4efb56a0"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fd19f3da.js",
    "revision": "c98ba366153ee16ac768dc67393a07c6"
  },
  {
    "url": "assets/svg/briefcase.svg",
    "revision": "72eb0266680765e1d356ca037f5cef60"
  },
  {
    "url": "assets/svg/globe.svg",
    "revision": "38e3374309f7a3db37c31f885d4b47b4"
  },
  {
    "url": "assets/svg/map-pin.svg",
    "revision": "156d6c03b4a6d93409c2e612c4f81bec"
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
    "url": "blog/index.html",
    "revision": "f91aeaeba36eb63c494ba47c83456786"
  },
  {
    "url": "doc/index.html",
    "revision": "83524aa4be6e2ae8f7e32286ef062c4a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "a559388bf9d103cc06e7c13ac24b59a3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "ce7f0ab09883d8142a8f002c1945656b"
  },
  {
    "url": "index.html",
    "revision": "b460a16c1704417249974a551bd45fa1"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "3ca13478a468b9bb609241d5e46b7400"
  },
  {
    "url": "product/index.html",
    "revision": "4dd7f0e22e3afbe0dd0a04e106dfbb4f"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "6564cb69ee875347bc6556a357760c61"
  },
  {
    "url": "py-list/index.html",
    "revision": "e4c0bbf1c9c290954b0dc8b99c64bb6f"
  },
  {
    "url": "resources/index.html",
    "revision": "346c9ea7dd8b85b590f18bdf0f729284"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "2b41a9c5fb4cf122d5a1a8f9457b109b"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "svg_test.svg",
    "revision": "08b37e8eb422f12620aa28175ee139c1"
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
