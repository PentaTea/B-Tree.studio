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
    "revision": "8d36c50505199b4a75afb7db25ad3534"
  },
  {
    "url": "assets/css/0.styles.36146355.css",
    "revision": "910be2d5d9b577e047b4cc960c956881"
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
    "url": "assets/img/0.f31205f0.svg",
    "revision": "f31205f0f990d39936dd6b65ca574746"
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
    "url": "assets/js/18.8b58a27c.js",
    "revision": "b30b7312c9855b4aa9c45104023ae8ac"
  },
  {
    "url": "assets/js/19.77ebee86.js",
    "revision": "e1e297cc8d25882164c99973d0ff6d21"
  },
  {
    "url": "assets/js/20.e9a2951d.js",
    "revision": "c16a8e375dbd50b6f9938d87c871680f"
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
    "url": "assets/js/app.d68c1035.js",
    "revision": "49284ab471716d09c6fab0918042468b"
  },
  {
    "url": "assets/js/layout-Layout.7d99ef9b.js",
    "revision": "afb0e902c663ed9b3c2020cd185c1cb1"
  },
  {
    "url": "assets/js/layout-NotFound.761cfe1a.js",
    "revision": "5715a4f1e9a432e011c6afaf601998d5"
  },
  {
    "url": "assets/js/page-069942c9.fc48db01.js",
    "revision": "a5056d7e9a6aead97c901158cffaa59c"
  },
  {
    "url": "assets/js/page-142fd774.89657baf.js",
    "revision": "20d3fa0baff00e94d545572092f1eaf4"
  },
  {
    "url": "assets/js/page-2037549c.7a46d7db.js",
    "revision": "6972212826c26cbf35829992c762c100"
  },
  {
    "url": "assets/js/page-22954010.fe0ff487.js",
    "revision": "46367bd35c00c3e4560199ac678ae4fe"
  },
  {
    "url": "assets/js/page-25b298b6.5f86c929.js",
    "revision": "aa96b6c3e2c0167c415c29c77d24f0de"
  },
  {
    "url": "assets/js/page-3c041b9e.2dd3707f.js",
    "revision": "155643e644395679b8ecf590b7f5a29e"
  },
  {
    "url": "assets/js/page-65eaf5e4.5e14392e.js",
    "revision": "0a92df8e38c9466c6b797db4ada0d7f8"
  },
  {
    "url": "assets/js/page-7205f0b4.2f952a7d.js",
    "revision": "6d29fa9256ad5d9c73e33e378add8592"
  },
  {
    "url": "assets/js/page-e4dfaf94.adae20f1.js",
    "revision": "70ab42ebe1ac66fd64c2d9ac117c179f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.b65109f8.js",
    "revision": "325188d52ced7b29421c9b0fbebb64e3"
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
    "revision": "6bde70c1a8b7ce84ae50a569a8b2376c"
  },
  {
    "url": "doc/index.html",
    "revision": "567b5956e2cb473ede2af2d4d49572a6"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "1a997286eb55917c23c5cbecdeca8188"
  },
  {
    "url": "guide/index.html",
    "revision": "739c8843c3fefdb4a8b0e58d1aebf50b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "62b448858d404452edb82cff06a35e68"
  },
  {
    "url": "index.html",
    "revision": "808d2e7f34152b408ce179be0846cf55"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "bb16b9a8656e20b06ffc16775311a1f0"
  },
  {
    "url": "py-list/index.html",
    "revision": "63a1e710a9599aa2ca7248a5fcde64be"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "e650876a4f4e35c26fdfe27121cf9930"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "0d458d282798879d526ce4fc8bd9e5d2"
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
