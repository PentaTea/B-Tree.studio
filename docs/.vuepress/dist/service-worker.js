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
    "revision": "dd859a0f3360b02fd7df2f46f7991208"
  },
  {
    "url": "assets/css/0.styles.adca8f67.css",
    "revision": "baac5288b99f3dcabe6ed2aef5e20c40"
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
    "url": "assets/js/1.3eb00112.js",
    "revision": "d7437d0248e5f1019c95ea3448d14673"
  },
  {
    "url": "assets/js/16.0098c041.js",
    "revision": "1d10f3cade0a0886c3e6dc85a8581c00"
  },
  {
    "url": "assets/js/17.49e61ccd.js",
    "revision": "b6e337ac57541f6efe02587f852b9431"
  },
  {
    "url": "assets/js/18.b059fa53.js",
    "revision": "14c39c2cea0545b53c99ba6bb44abe60"
  },
  {
    "url": "assets/js/19.d26c2160.js",
    "revision": "1f06650c1478afab8f7c098f1ed8927d"
  },
  {
    "url": "assets/js/20.ba05e59f.js",
    "revision": "5804e3d93212a9101da481e6223f8a6c"
  },
  {
    "url": "assets/js/21.77fa5d93.js",
    "revision": "17559b3678bbe4e400f719a63f932c5a"
  },
  {
    "url": "assets/js/22.a1b6bd62.js",
    "revision": "aa5fd27808dd6284dacb6c5f1aa60114"
  },
  {
    "url": "assets/js/23.661e7290.js",
    "revision": "b639ebf17e69609e3422ad4aef471c0f"
  },
  {
    "url": "assets/js/24.efbe0ffd.js",
    "revision": "af5a40aaf56c72e41ad712cfde0bd650"
  },
  {
    "url": "assets/js/25.6f80a65e.js",
    "revision": "38ad6d647705f3104648cecdec13bccb"
  },
  {
    "url": "assets/js/26.164bd929.js",
    "revision": "0a88b5bed1f67c1716942e951641bcf0"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.989170f3.js",
    "revision": "bd643b7557d29062cac638b790fa147a"
  },
  {
    "url": "assets/js/layout-Layout.b7947204.js",
    "revision": "7d73b094b3f7376cb3127f0d94c5d996"
  },
  {
    "url": "assets/js/layout-NotFound.9ccfc250.js",
    "revision": "f3f711b856868e54d10fe0c9c760aeaa"
  },
  {
    "url": "assets/js/page-1301ab8a.56f0fc2f.js",
    "revision": "b61ca58290274e267dfcc97ab7728214"
  },
  {
    "url": "assets/js/page-142fd774.cdf9c82f.js",
    "revision": "a644d3b655bd74d7c18c7b0b20fc1681"
  },
  {
    "url": "assets/js/page-2037549c.e8dac0ee.js",
    "revision": "426af69167ebd2ed583d1be41de68bed"
  },
  {
    "url": "assets/js/page-22954010.6fa3e58b.js",
    "revision": "e70219f9a794c2241b2c332af4ced692"
  },
  {
    "url": "assets/js/page-25b298b6.e272265b.js",
    "revision": "7411bbb977ebe2f69fc44f94bc83c2d6"
  },
  {
    "url": "assets/js/page-3c041b9e.4022234d.js",
    "revision": "49be8186f7c9ebc0c8e53601f455430b"
  },
  {
    "url": "assets/js/page-65eaf5e4.f52d71b3.js",
    "revision": "1b3383fc62613c820549f059a28953cc"
  },
  {
    "url": "assets/js/page-7205f0b4.ea169338.js",
    "revision": "a92ec2cc3f45d1c8d2078045e1233ceb"
  },
  {
    "url": "assets/js/page-e4dfaf94.89442b27.js",
    "revision": "e27666b239948afb42844c1ed0b23071"
  },
  {
    "url": "assets/js/page-fd1ee6b4.282330d3.js",
    "revision": "014b5fa024a452a37c11bc000cc1bb68"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fa9f2520.js",
    "revision": "b1f5b69b2f47b212f0f01d9e6c97a3cb"
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
    "revision": "7667fde8f1241f6af010e7f9e4977f10"
  },
  {
    "url": "doc/index.html",
    "revision": "2141e1e8cb1cd565f4170bf52233f413"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "277d0a7f918051f43578c9de870771d3"
  },
  {
    "url": "guide/index.html",
    "revision": "37ad2fa40049e06cdd3db18139d1273a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f761223ecf5f45c249d02b82120a5e68"
  },
  {
    "url": "index.html",
    "revision": "37858f2fbe73635d2a0a0064dd2f3264"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "44dd2e636645c35e646d274a358b8e09"
  },
  {
    "url": "py-list/index.html",
    "revision": "133556ac0180abcfe3fac1998d2523b4"
  },
  {
    "url": "resources/index.html",
    "revision": "8fe193a220d994725da06cdc9ab8e6c4"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "3d6de6b7edf18f3e2277c6b3aa050d80"
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
