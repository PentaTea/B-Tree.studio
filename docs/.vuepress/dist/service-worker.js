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
    "revision": "0c8f3db84e946c8cc85449f3a6e62470"
  },
  {
    "url": "assets/css/0.styles.7c9b1d4d.css",
    "revision": "1c65b26387a163af643c11f45bc45542"
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
    "url": "assets/js/1.6be3a19a.js",
    "revision": "94af3f12195db93afc6dedec695296ae"
  },
  {
    "url": "assets/js/16.ede859bb.js",
    "revision": "f7046110730df819dd5f9021a3a9ae58"
  },
  {
    "url": "assets/js/17.b4fab918.js",
    "revision": "8f06a347fbde1b14f244b6a486d32ea2"
  },
  {
    "url": "assets/js/18.2bb80bdf.js",
    "revision": "f9011dac8b3e8632053524a8f899b2dd"
  },
  {
    "url": "assets/js/19.ef065542.js",
    "revision": "311fd29570a166d645840a95f6ccb8bd"
  },
  {
    "url": "assets/js/20.9f8ec613.js",
    "revision": "dafbcb250409d3d16517a4f6f426d71e"
  },
  {
    "url": "assets/js/21.3f8f35a5.js",
    "revision": "3b4a89dac3d1d1f4255cab1f1cef6d8e"
  },
  {
    "url": "assets/js/22.cf5ecafc.js",
    "revision": "99858a13039603038abf2695337ff851"
  },
  {
    "url": "assets/js/23.90b80473.js",
    "revision": "f5307ba9994f7203e61f3db2cdc2f065"
  },
  {
    "url": "assets/js/24.bb6ca2c2.js",
    "revision": "98299f2fc73b99be1cd7b30203d60000"
  },
  {
    "url": "assets/js/25.88eb97c9.js",
    "revision": "061b6fffb5c12976fc6eeea2f6b2e01a"
  },
  {
    "url": "assets/js/26.c5d00ad6.js",
    "revision": "689e16b86df9033d8a6f6ef0af06ad30"
  },
  {
    "url": "assets/js/27.a3fa6e44.js",
    "revision": "951569532b82692eb03f7483b074e7a8"
  },
  {
    "url": "assets/js/28.37b81dd0.js",
    "revision": "c38f218da74412bd7270d5ef143703cd"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.df560cca.js",
    "revision": "5e79e1ada4720d50fe3dd7e8d3409411"
  },
  {
    "url": "assets/js/layout-Layout.91c1cdee.js",
    "revision": "73420150705d7c296993c671eeea69f0"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.994c12b3.js",
    "revision": "26d6014b9cb5b4b6e046914b24eff909"
  },
  {
    "url": "assets/js/page-142fd774.f85534c4.js",
    "revision": "9a3d7ca9a5374669b8539127ad973a6a"
  },
  {
    "url": "assets/js/page-2037549c.05948559.js",
    "revision": "987da24aeadbff9130ce6410765a2f9f"
  },
  {
    "url": "assets/js/page-22954010.ad17c4ce.js",
    "revision": "706c92bae0a7431dffd52cdca6d31485"
  },
  {
    "url": "assets/js/page-25b298b6.23b54e14.js",
    "revision": "18a898b67a2c83c9129ab7783a90e8d2"
  },
  {
    "url": "assets/js/page-3c041b9e.8347cbeb.js",
    "revision": "ad8f442a89b2e42a4549fbc23551cd27"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c9ed91c.js",
    "revision": "5e295e700b9429ab4fedcbf94736ee50"
  },
  {
    "url": "assets/js/page-7205f0b4.27025fcb.js",
    "revision": "9904b554be9df906ff444c2239621168"
  },
  {
    "url": "assets/js/page-e4dfaf94.2f67bf05.js",
    "revision": "b25eaf9f2585091d47548a0f4385edb0"
  },
  {
    "url": "assets/js/page-fd1ee6b4.53274532.js",
    "revision": "753f4732e634463afb453632bade14ff"
  },
  {
    "url": "assets/js/vendors~layout-Layout.66cd8c1c.js",
    "revision": "311b87b47d58bb97d30db89bb946f7bb"
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
    "revision": "52c8c98bdde000b50202152e4749076c"
  },
  {
    "url": "doc/index.html",
    "revision": "db362088544488ba2d227d81cc792d05"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "451616e326084b6c3600c0c3b6fbf69e"
  },
  {
    "url": "guide/index.html",
    "revision": "e3303f86cffd9a47683b49994442f50e"
  },
  {
    "url": "guide/team/index.html",
    "revision": "5d8c5f6c497d76413295ed6450f379ff"
  },
  {
    "url": "index.html",
    "revision": "4fa6082c4c1e91ccbf99e0ab71224c88"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "365d18ea2461b68634b6ecaf0831128e"
  },
  {
    "url": "py-list/index.html",
    "revision": "dcae95364ef555e6fb1a10c4b8268597"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "50992a108f86dab4dc6014236d8b81db"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "255f20b85c6dc5b1def22b208e914059"
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
