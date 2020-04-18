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
    "revision": "afc32d657e01a2d150381cd978b5824d"
  },
  {
    "url": "assets/css/0.styles.f640685a.css",
    "revision": "ff1b757d022c59a10325af6e3a039289"
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
    "url": "assets/js/19.af1fd8f3.js",
    "revision": "fe7e6235415ba695225934e907e3b545"
  },
  {
    "url": "assets/js/20.e19a9432.js",
    "revision": "ac9ca467b39522d57dd25c807602d1a5"
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
    "url": "assets/js/app.ed68b8c0.js",
    "revision": "dcfc61855cb9c294e6a43a5735b96db3"
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
    "url": "assets/js/page-142fd774.4efacbf6.js",
    "revision": "c2c67b0ebbe7b8166a9b1dfac8002119"
  },
  {
    "url": "assets/js/page-2037549c.ccdc5349.js",
    "revision": "d1ce98144123be11a2a43d2fd893e47a"
  },
  {
    "url": "assets/js/page-22954010.415699d5.js",
    "revision": "fddf6fd81a66f2373e2cb596534ed4d1"
  },
  {
    "url": "assets/js/page-25b298b6.4a71b642.js",
    "revision": "8a61ddd096598aa65bc399360ed9079d"
  },
  {
    "url": "assets/js/page-3c041b9e.dbc61925.js",
    "revision": "034a435984fa1d53de863d0f492b702d"
  },
  {
    "url": "assets/js/page-65eaf5e4.9ff15b71.js",
    "revision": "a92117178a5041cae0e138cf5e497291"
  },
  {
    "url": "assets/js/page-7205f0b4.19ca861b.js",
    "revision": "9c23e3ef342a92020dfc7fc8124bcb0d"
  },
  {
    "url": "assets/js/page-e4dfaf94.89442b27.js",
    "revision": "e27666b239948afb42844c1ed0b23071"
  },
  {
    "url": "assets/js/page-fd1ee6b4.c07c825a.js",
    "revision": "88934529328742bb8ab00161f719bf2b"
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
    "revision": "c080e39cf47252c7f4c55c8f70635eda"
  },
  {
    "url": "doc/index.html",
    "revision": "99c3b8709c43d919b8736510099b249a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "cf6178a08eee4a802ce398595025753c"
  },
  {
    "url": "guide/index.html",
    "revision": "7063658cef6c4c6d04885c5e28bd9d93"
  },
  {
    "url": "guide/team/index.html",
    "revision": "026c854290065cbf57d7e6d00ae79ce7"
  },
  {
    "url": "index.html",
    "revision": "6bf85fc1e228f41d16c4fcbb7d680d9b"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "a9feb39b657aa3551a0268ef6ac64b77"
  },
  {
    "url": "py-list/index.html",
    "revision": "ca86afb17ee7ae058f6795e3ba0d3f85"
  },
  {
    "url": "resources/index.html",
    "revision": "ad39e3cae951aa126f7f8c2be8ea313d"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "84c6136ec991b3be4757792c0a4a85c5"
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
