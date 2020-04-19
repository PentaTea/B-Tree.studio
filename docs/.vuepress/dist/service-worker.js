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
    "revision": "2a9669145b2be7d0078fd4a3fd00dd6a"
  },
  {
    "url": "assets/css/0.styles.72c0b6f3.css",
    "revision": "766721b7eec89a76ca83ae898b07c474"
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
    "url": "assets/js/17.a7a2f448.js",
    "revision": "827da60356f1a0718bc15e8d365846e3"
  },
  {
    "url": "assets/js/18.b059fa53.js",
    "revision": "14c39c2cea0545b53c99ba6bb44abe60"
  },
  {
    "url": "assets/js/19.25aeca50.js",
    "revision": "f30ed173f91881ebc0eb68d502bb12e3"
  },
  {
    "url": "assets/js/20.7470f01a.js",
    "revision": "02aa1fff6625bd082d0717ba6549effc"
  },
  {
    "url": "assets/js/21.77fa5d93.js",
    "revision": "17559b3678bbe4e400f719a63f932c5a"
  },
  {
    "url": "assets/js/22.d817c0d5.js",
    "revision": "718ecb38a807b0a72675be4b1a5ac73b"
  },
  {
    "url": "assets/js/23.661e7290.js",
    "revision": "b639ebf17e69609e3422ad4aef471c0f"
  },
  {
    "url": "assets/js/24.041157db.js",
    "revision": "9ba63d9c42d1941767d45e22e8b486b2"
  },
  {
    "url": "assets/js/25.6f80a65e.js",
    "revision": "38ad6d647705f3104648cecdec13bccb"
  },
  {
    "url": "assets/js/26.4ce90b00.js",
    "revision": "b4531dcf4834c4e4c9b7ab7ca614e3ab"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.b1b19a7d.js",
    "revision": "74219ada58142689ee3bcb73205695b4"
  },
  {
    "url": "assets/js/layout-Layout.543b6409.js",
    "revision": "38b5b1cc8eda5ab4be83e0c9ecae6f24"
  },
  {
    "url": "assets/js/layout-NotFound.9ccfc250.js",
    "revision": "f3f711b856868e54d10fe0c9c760aeaa"
  },
  {
    "url": "assets/js/page-1301ab8a.b6c4a453.js",
    "revision": "f27318c61e869eff5173e29d75fff613"
  },
  {
    "url": "assets/js/page-142fd774.4f8addb0.js",
    "revision": "7ca2985abf30f38cff297e74f2cc9ba8"
  },
  {
    "url": "assets/js/page-2037549c.7e85b703.js",
    "revision": "a75b789ef061ab4c5bf0ab15d4a6b36f"
  },
  {
    "url": "assets/js/page-22954010.b71ffafe.js",
    "revision": "0bf42f27aac52c779c19843a06251916"
  },
  {
    "url": "assets/js/page-25b298b6.e272265b.js",
    "revision": "7411bbb977ebe2f69fc44f94bc83c2d6"
  },
  {
    "url": "assets/js/page-3c041b9e.dbc61925.js",
    "revision": "034a435984fa1d53de863d0f492b702d"
  },
  {
    "url": "assets/js/page-65eaf5e4.5f484e09.js",
    "revision": "426c40dfad9bda7cb05ad14a811bfbf4"
  },
  {
    "url": "assets/js/page-7205f0b4.aa80f91b.js",
    "revision": "da08acedd337f0606d0bf6b6c5692ce7"
  },
  {
    "url": "assets/js/page-e4dfaf94.b3cb383a.js",
    "revision": "657dcaff34798f8b28271bcba6996438"
  },
  {
    "url": "assets/js/page-fd1ee6b4.993d2654.js",
    "revision": "f68aa4e6fe1dea90dd37a885d075bbe2"
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
    "revision": "500a22eaf0ef08d754e77a14d1b168d5"
  },
  {
    "url": "doc/index.html",
    "revision": "52355618f1283086ed2cf0c29edf7ad1"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "5483589ed3f5d60a813bea75b83a77da"
  },
  {
    "url": "guide/index.html",
    "revision": "1ca41d25d4fd99f79ec30254089c29be"
  },
  {
    "url": "guide/team/index.html",
    "revision": "98eab470d7398d7b61065aa3632e5e6f"
  },
  {
    "url": "index.html",
    "revision": "1660da06d743316a0e8c390eba1c956a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "b3dafc262c7df0b068f490d4c6e27585"
  },
  {
    "url": "py-list/index.html",
    "revision": "4ca27a4c8eeff10dcb282d7430ffeeaa"
  },
  {
    "url": "resources/index.html",
    "revision": "652aea881b3832a339aea3bfc011b64f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "eebc43be599961de584d25b8edfd63e9"
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
