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
    "revision": "c25265c9a3ce7d6291269c09d7cfb52b"
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
    "url": "assets/js/19.ba3b1649.js",
    "revision": "1d31c355ccd0824f57903a6489f6d9c6"
  },
  {
    "url": "assets/js/20.c63f252b.js",
    "revision": "3ec39e68fcfd41a37189504ffba093bd"
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
    "url": "assets/js/24.041157db.js",
    "revision": "9ba63d9c42d1941767d45e22e8b486b2"
  },
  {
    "url": "assets/js/25.6f80a65e.js",
    "revision": "38ad6d647705f3104648cecdec13bccb"
  },
  {
    "url": "assets/js/26.dd6e153a.js",
    "revision": "623a5dcf78b7ecd80278a9105c30d193"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.af778509.js",
    "revision": "17f7485a5a356d15b59bd1359369c333"
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
    "url": "assets/js/page-1301ab8a.0e84edef.js",
    "revision": "f7a65e7fd38bb972d6ede4d565f72232"
  },
  {
    "url": "assets/js/page-142fd774.bc4bd68b.js",
    "revision": "c8edb6496ce1fe1e0f7c2038108c6ca1"
  },
  {
    "url": "assets/js/page-2037549c.cd26cfe0.js",
    "revision": "1d97c6e791052c456c8b233fd8a3a10c"
  },
  {
    "url": "assets/js/page-22954010.415699d5.js",
    "revision": "fddf6fd81a66f2373e2cb596534ed4d1"
  },
  {
    "url": "assets/js/page-25b298b6.f4439707.js",
    "revision": "73bd83ae0d648d867b401fc2fdba0492"
  },
  {
    "url": "assets/js/page-3c041b9e.7b3dedd8.js",
    "revision": "3753fb5245e89af29ecb9c21297385c8"
  },
  {
    "url": "assets/js/page-65eaf5e4.f36ca20f.js",
    "revision": "c261682eaf46f16c9a2a5eb42a141a9c"
  },
  {
    "url": "assets/js/page-7205f0b4.ea169338.js",
    "revision": "a92ec2cc3f45d1c8d2078045e1233ceb"
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
    "revision": "a48875b2d7d498daab93e883ffa5b5a1"
  },
  {
    "url": "doc/index.html",
    "revision": "9ebd2f0a23021788a393458860fef7d1"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "73817d686abe4be5121ca116ec8b5010"
  },
  {
    "url": "guide/index.html",
    "revision": "aeefd4a8f0b014873f1448d4dce4fcad"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d25dcc2f8b27cf0887e39edc90e3c2a5"
  },
  {
    "url": "index.html",
    "revision": "b217274ab05a4c693af026f629a1f31a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "542347c64f949fdb832f3f20580099b5"
  },
  {
    "url": "py-list/index.html",
    "revision": "abd81ea3ed133c35a6bc162dad02ca70"
  },
  {
    "url": "resources/index.html",
    "revision": "521bb1c30e2499d3d6037c29176a5a45"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "31f19d80226d1179084f998450e5e154"
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
