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
    "revision": "6fd988848147141234b66e1ac663dc48"
  },
  {
    "url": "assets/css/0.styles.9fa855d8.css",
    "revision": "b12c09cf3fc3f2e2d62ea03b35fd6520"
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
    "url": "assets/img/0.41d20d93.svg",
    "revision": "41d20d930c36b55581e0a22d2b836277"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/五茶.jpg",
    "revision": "99c3a8349fae7f49857cc3204eef8dbb"
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
    "url": "assets/js/1.aa7f4835.js",
    "revision": "ffdde0d535b97f325d14158a01ca92c8"
  },
  {
    "url": "assets/js/16.c3425ea5.js",
    "revision": "4db4145d0b9091d7e254db0f0627c339"
  },
  {
    "url": "assets/js/17.186d9704.js",
    "revision": "80bb10d6d9f6a086030a15fcf103e5d1"
  },
  {
    "url": "assets/js/18.c0c767f4.js",
    "revision": "ffe5d2dd4d2b21e43f618cfb84044141"
  },
  {
    "url": "assets/js/19.77ebee86.js",
    "revision": "e1e297cc8d25882164c99973d0ff6d21"
  },
  {
    "url": "assets/js/20.9a915a69.js",
    "revision": "a0429d7634b4ec53d56900a31a1b1fb6"
  },
  {
    "url": "assets/js/21.805b0315.js",
    "revision": "173c008c2dd8d936272374a06076b3c9"
  },
  {
    "url": "assets/js/22.499d546d.js",
    "revision": "e33f107b525dbdb441fbeac8049f487a"
  },
  {
    "url": "assets/js/23.53967b3f.js",
    "revision": "ab0f6ff2e989c4ffd1f7e7641f47a7c4"
  },
  {
    "url": "assets/js/24.1f671b20.js",
    "revision": "542ab4720011058574be906aaaacac97"
  },
  {
    "url": "assets/js/25.090cd55f.js",
    "revision": "3a30392d1b964c6fe2d0a30e40e44fdb"
  },
  {
    "url": "assets/js/26.5a81dc3f.js",
    "revision": "555a1642470aa861e8f10cd8df72e19a"
  },
  {
    "url": "assets/js/27.053ba8a5.js",
    "revision": "b723421c19efd278cd00be135676791a"
  },
  {
    "url": "assets/js/28.a4f5974a.js",
    "revision": "6583635977eb7d137f7333f921a8d3e9"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.69719ff9.js",
    "revision": "f90beb0d0d030c432ea5772db2bc8304"
  },
  {
    "url": "assets/js/layout-Layout.bd0a652f.js",
    "revision": "1af8b8182194277ba80e056f0b340fcd"
  },
  {
    "url": "assets/js/layout-NotFound.761cfe1a.js",
    "revision": "5715a4f1e9a432e011c6afaf601998d5"
  },
  {
    "url": "assets/js/page-069942c9.58174a3c.js",
    "revision": "9d9cb7f40c0063ba50bbdc30f209c5c6"
  },
  {
    "url": "assets/js/page-142fd774.89657baf.js",
    "revision": "20d3fa0baff00e94d545572092f1eaf4"
  },
  {
    "url": "assets/js/page-2037549c.36d1f80c.js",
    "revision": "7ba3601a5c63525ebb7e3061632eb015"
  },
  {
    "url": "assets/js/page-22954010.fe0ff487.js",
    "revision": "46367bd35c00c3e4560199ac678ae4fe"
  },
  {
    "url": "assets/js/page-25b298b6.6724b4aa.js",
    "revision": "5c936d64e5bb232529605baa47626fcd"
  },
  {
    "url": "assets/js/page-3c041b9e.736595bf.js",
    "revision": "92d7adc1dc1521d50619c21e1ae6ab76"
  },
  {
    "url": "assets/js/page-65eaf5e4.5e14392e.js",
    "revision": "0a92df8e38c9466c6b797db4ada0d7f8"
  },
  {
    "url": "assets/js/page-7205f0b4.2dbc6b49.js",
    "revision": "f2a1efa877b1147c1fce3016804aa020"
  },
  {
    "url": "assets/js/page-e4dfaf94.36344e44.js",
    "revision": "08448ce5c1eb270253a97adc2fdef9c4"
  },
  {
    "url": "assets/js/page-fd1ee6b4.97d12dbe.js",
    "revision": "363d970bb9c7b1c884f43fb47bcf1f39"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d78b1b5b.js",
    "revision": "ef7020166b9aaee8b14d6b3b72e5e36c"
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
    "revision": "cc927f53e3b7dc55d83f656900a4daca"
  },
  {
    "url": "doc/index.html",
    "revision": "895382d019822fe2fa7aca2806400ac4"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "d0dae996fec81f1394edb3b1d0fab3fd"
  },
  {
    "url": "guide/index.html",
    "revision": "f8bd2bd735ff91c220b001f6e9fd1ee3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "35c74f91d48c435b3c6169846e9d0d8f"
  },
  {
    "url": "index.html",
    "revision": "c4e71c639ece7a8c07a272104c0fc1e4"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "ed5467d23c7acc5f1c5652edb1b26f5b"
  },
  {
    "url": "py-list/index.html",
    "revision": "c64c24008778ce67bcc6e7e8ed6b91a1"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "e2bd6226f1ce5d2913647705d256fa19"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "f79eb17c77e09243c4884e72e0972225"
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
