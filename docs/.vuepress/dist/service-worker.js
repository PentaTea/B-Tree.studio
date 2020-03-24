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
    "revision": "ac6c09476451ef23af93ac58fe1f689a"
  },
  {
    "url": "assets/css/0.styles.65cc70fb.css",
    "revision": "4213b4944432a002298539e3f637dcab"
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
    "url": "assets/js/16.86f3f674.js",
    "revision": "ccf360a565c3944e04c94f5bd74b8117"
  },
  {
    "url": "assets/js/17.437c678e.js",
    "revision": "5879237a5492a8d72326a7d4c5d7a146"
  },
  {
    "url": "assets/js/18.3fa3f973.js",
    "revision": "12b4b55a318bc1f5b3175b83efc9a61b"
  },
  {
    "url": "assets/js/19.1856f969.js",
    "revision": "31d8a78b8a1dc13a234752779686a538"
  },
  {
    "url": "assets/js/20.0d7c8389.js",
    "revision": "35280cdf8230efb7c5624d7b473e7e92"
  },
  {
    "url": "assets/js/21.9bb2c21d.js",
    "revision": "07a000eca51e128459576ee1337863b9"
  },
  {
    "url": "assets/js/22.25412312.js",
    "revision": "4e481f856b2d5755872a3fec9af238c3"
  },
  {
    "url": "assets/js/23.6847c5ab.js",
    "revision": "07f4d2016b3ec8180438a065e18ef8f5"
  },
  {
    "url": "assets/js/24.7025fc3d.js",
    "revision": "0cb4aec12e2e7e87db3d256e910b5905"
  },
  {
    "url": "assets/js/app.658d52ff.js",
    "revision": "61f85026d6d15947f11a013cfbcc16bf"
  },
  {
    "url": "assets/js/layout-Layout.7bbb0d84.js",
    "revision": "74d8bce497b22134d1c5b466f0e6c306"
  },
  {
    "url": "assets/js/layout-NotFound.81851a79.js",
    "revision": "189b8e8356ebf261775984e4d6129b3f"
  },
  {
    "url": "assets/js/page-07fa8526.558a0f4f.js",
    "revision": "fca632a8478bf81c9df56e8ecbfc8117"
  },
  {
    "url": "assets/js/page-1301ab8a.b8c68b8b.js",
    "revision": "d2846f1d90abcbb894d8a12e31d9b656"
  },
  {
    "url": "assets/js/page-2037549c.d7b8da50.js",
    "revision": "224655c5530e36893577d2196e604a0b"
  },
  {
    "url": "assets/js/page-22954010.03033e72.js",
    "revision": "ba300bc1a27fc4a91b15eafaebb9c8bf"
  },
  {
    "url": "assets/js/page-25b298b6.420559c4.js",
    "revision": "7c413ca859875977ff0bdb3b205f05da"
  },
  {
    "url": "assets/js/page-3c041b9e.06955b7e.js",
    "revision": "d3667f8078726a8c3e47634bc0c62007"
  },
  {
    "url": "assets/js/page-65eaf5e4.d43e4328.js",
    "revision": "b2a6aa5a2ec17159980f1a6ff6ba0499"
  },
  {
    "url": "assets/js/page-7205f0b4.452cb73e.js",
    "revision": "8486eae7913fc8826ce1ed7118030a3c"
  },
  {
    "url": "assets/js/page-a2896314.34638b9b.js",
    "revision": "ea71ab4665ee5c7697af25b0e851d9d4"
  },
  {
    "url": "assets/js/page-a7e2470e.bc3ff68b.js",
    "revision": "c0b578a77726c255221151de9f4ad7bc"
  },
  {
    "url": "assets/js/page-e4dfaf94.c905f682.js",
    "revision": "eac7de29fa0db1755ec99141dae1bfb4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.21d84bba.js",
    "revision": "bc663e3c3da1ea158d68d2181908f29e"
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
    "revision": "96324e2fb7047c29d62daa0294ba0f3d"
  },
  {
    "url": "doc/index.html",
    "revision": "3c52999ab0625b986bb53d9848686a5d"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "4a3c245201463e83bdac9fcd632029db"
  },
  {
    "url": "guide/team/index.html",
    "revision": "b27bdcbc854bafab9600f3fa97a5e41a"
  },
  {
    "url": "index.html",
    "revision": "54d1d0000c8646d3e974664182e0d8b4"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "44c5cede01f2196c21319c728d7567c5"
  },
  {
    "url": "product/index.html",
    "revision": "2f5b7a640a1a248b36cad19669c99900"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "d5fbd22ac49bd20280504bff7c59baf9"
  },
  {
    "url": "py-list/index.html",
    "revision": "82ca75b9a59807cd7d0367b32d31eb30"
  },
  {
    "url": "resources/index.html",
    "revision": "9682b00e82a8f08f263f2172a5afea0f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "8d1a6de908a4d4b93703254a52cda8f5"
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
