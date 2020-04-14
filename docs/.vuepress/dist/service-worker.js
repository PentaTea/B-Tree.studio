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
    "revision": "68a58ebbe9d82af4c77cf4c4d38d9d67"
  },
  {
    "url": "assets/css/0.styles.2acb5c51.css",
    "revision": "466a64f85a3c0e2c71816affca2971dd"
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
    "url": "assets/js/1.a5cff9f9.js",
    "revision": "8a2a2c807ffe200e4e1be956777b670f"
  },
  {
    "url": "assets/js/15.3a672b33.js",
    "revision": "54580d3131f4384313af547f56286478"
  },
  {
    "url": "assets/js/16.04f34348.js",
    "revision": "bfb93964b3b87ba30a622da36607c8ea"
  },
  {
    "url": "assets/js/17.d8e34faf.js",
    "revision": "7ef044bc539377a56e294434d6a1d9dc"
  },
  {
    "url": "assets/js/18.07472b18.js",
    "revision": "37bd44cd9224e483cbdf1c37411b2315"
  },
  {
    "url": "assets/js/19.b720366b.js",
    "revision": "5cd7ce6b26b43681c7892a1dfac47bc2"
  },
  {
    "url": "assets/js/20.b18c19be.js",
    "revision": "c7441baa91c59d1d684b5705e5736c70"
  },
  {
    "url": "assets/js/21.2f1882b8.js",
    "revision": "afa3829e422e81a7a550cd3c3f10f5ea"
  },
  {
    "url": "assets/js/22.6c0ea5f9.js",
    "revision": "92bbd0cadd3c580c4b3080d872c8f2ce"
  },
  {
    "url": "assets/js/23.3201da45.js",
    "revision": "fb47114c40ebd67f0b1ec9b95008736c"
  },
  {
    "url": "assets/js/24.e03ea3de.js",
    "revision": "58fcf11fc641cc35ed788eafdb927d32"
  },
  {
    "url": "assets/js/25.21d83988.js",
    "revision": "0c1771653b992c91fb92eb995c7dad47"
  },
  {
    "url": "assets/js/26.c979798d.js",
    "revision": "370a521a6daed6e36bc2a527c4bde8dd"
  },
  {
    "url": "assets/js/app.65101b81.js",
    "revision": "777c32570c98608b5fe027c10c4c7f06"
  },
  {
    "url": "assets/js/layout-Layout.873652c7.js",
    "revision": "cd8c10f641d3593af5e57609b0bb7b2f"
  },
  {
    "url": "assets/js/layout-NotFound.df4d76e7.js",
    "revision": "4ec37bde8c08075f46c450e48ba4bc60"
  },
  {
    "url": "assets/js/page-1301ab8a.230cf08d.js",
    "revision": "34dd2c3dc67a22fe7556e0b0545473d8"
  },
  {
    "url": "assets/js/page-142fd774.a1889558.js",
    "revision": "75891e9d30cca32514760a3ab3374ea6"
  },
  {
    "url": "assets/js/page-2037549c.67244eda.js",
    "revision": "d628e6c6fe3961ccaf3a06f797425c5b"
  },
  {
    "url": "assets/js/page-22954010.937c9013.js",
    "revision": "7aee4e522daec18b7b010be11aebe6fb"
  },
  {
    "url": "assets/js/page-25b298b6.df276e83.js",
    "revision": "1ed3ff77c0f9ea640cda743f0e9a94d5"
  },
  {
    "url": "assets/js/page-3c041b9e.fdde9244.js",
    "revision": "558e301aae394e47fdbaa12b6cc6ab3f"
  },
  {
    "url": "assets/js/page-65eaf5e4.6fc97622.js",
    "revision": "c4a579d244373b1f8a70f507ad02e113"
  },
  {
    "url": "assets/js/page-7205f0b4.b787c8c2.js",
    "revision": "050aa98ee181815e0a0a37900cf45e87"
  },
  {
    "url": "assets/js/page-e4dfaf94.b8aca180.js",
    "revision": "ba3e521ce972561b7a41464a2317e3fc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.90f4954a.js",
    "revision": "6cb31b0eaddfe8650d12caa112eda694"
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
    "revision": "0ee778c2fe198d0529885bb9edec6bb7"
  },
  {
    "url": "doc/index.html",
    "revision": "f1b4268e14719a31d671a289359dbb83"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "09b74ca65754b651c2697b693ded96e8"
  },
  {
    "url": "guide/team/index.html",
    "revision": "1902ec95a5c9e626620eba620a91c53e"
  },
  {
    "url": "index.html",
    "revision": "f98aef0f51e72c2d42d6f9b86598f6d9"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "e19f782241a73a103c0e809fdbdf225a"
  },
  {
    "url": "py-list/index.html",
    "revision": "fb3cc727791bc6002573b4cad0223a56"
  },
  {
    "url": "resources/index.html",
    "revision": "83972c6e153a0282c3689510d1b822d4"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "fd0be98beaf15a7d7f979e5ac197f182"
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
