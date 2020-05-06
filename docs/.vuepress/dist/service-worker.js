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
    "revision": "03122c45fe224332f3281c845f10eafa"
  },
  {
    "url": "assets/css/0.styles.11ad7796.css",
    "revision": "7d11450589644ff25eb4e15cd2d08d60"
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
    "url": "assets/js/17.0936088c.js",
    "revision": "1c2ab933cf64ca90586f3e37db518f26"
  },
  {
    "url": "assets/js/18.1f793df0.js",
    "revision": "fc20840741657f94132f387d5fa688ce"
  },
  {
    "url": "assets/js/19.9ec03357.js",
    "revision": "0620202291a8c2c895ee30e61721a7dc"
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
    "url": "assets/js/23.5c41f95e.js",
    "revision": "706e86058be742c78db8d856942d620a"
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
    "url": "assets/js/app.3dd8a0b6.js",
    "revision": "26f7e3e60d2588b90b0494d8f40ce65a"
  },
  {
    "url": "assets/js/layout-Layout.02724be8.js",
    "revision": "103e4f808ff6fadee54cdf678c52133b"
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
    "url": "assets/js/page-142fd774.b5488f92.js",
    "revision": "a5d5ccda6288ffb297bf1364d775ae70"
  },
  {
    "url": "assets/js/page-2037549c.05948559.js",
    "revision": "987da24aeadbff9130ce6410765a2f9f"
  },
  {
    "url": "assets/js/page-22954010.4c9e1f77.js",
    "revision": "045d52c81f35e9acd99d077bc4c3eb69"
  },
  {
    "url": "assets/js/page-25b298b6.346a1d01.js",
    "revision": "726cf179b63837133a150b542f2bd341"
  },
  {
    "url": "assets/js/page-3c041b9e.00e591a8.js",
    "revision": "114ec858838831f520efc4f25c48c61c"
  },
  {
    "url": "assets/js/page-65eaf5e4.c55f17ba.js",
    "revision": "5b8f937deb2a35c5461c72541327dca2"
  },
  {
    "url": "assets/js/page-7205f0b4.e40311c2.js",
    "revision": "f1881c73b79b612f2f77ff9f34f2f5e7"
  },
  {
    "url": "assets/js/page-e4dfaf94.7dcb8b8a.js",
    "revision": "c8b03ff9e3cca6a59e3aa6283c535e9a"
  },
  {
    "url": "assets/js/page-fd1ee6b4.acb1440b.js",
    "revision": "5ab0ed640163d39a991f0b7c426a07a1"
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
    "revision": "ec66d283d2af5a08cbfb85f0e80997b8"
  },
  {
    "url": "doc/index.html",
    "revision": "89d06405c9e5c5ad5dfb590683e41ac9"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "67b7e4a79b374bed22db4c3c02b00f0d"
  },
  {
    "url": "guide/index.html",
    "revision": "e19c32aac5fa9c4990b63cf335953f4d"
  },
  {
    "url": "guide/team/index.html",
    "revision": "cf770a8bda33f9cd1ce515257fa260d9"
  },
  {
    "url": "index.html",
    "revision": "23480198e82e27cd3db8cc27e5cf3353"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "cd7c2d35427c149a0e1a009cf90eecde"
  },
  {
    "url": "py-list/index.html",
    "revision": "92e99a92695860729a6c4539d321701d"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "84219516f998ec8a6d3c6a9cd692817f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "fedc67ab367113a6c96e8fc0f67716e7"
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
