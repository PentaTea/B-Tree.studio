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
    "revision": "75abe36042f4f2b9b283ab342a1daa75"
  },
  {
    "url": "assets/css/0.styles.c3395fd1.css",
    "revision": "9450e19996fd565239b8cdce4d45c615"
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
    "url": "assets/js/1.dcec0b1a.js",
    "revision": "68d06814d8d4d04f11d627e7a4abf739"
  },
  {
    "url": "assets/js/17.dd8d1ebe.js",
    "revision": "9332d828414bfa16e842956317b5a983"
  },
  {
    "url": "assets/js/18.076c2e12.js",
    "revision": "f91a09f99aa0130bd1a4cb727ba7fdf7"
  },
  {
    "url": "assets/js/19.b099e7e2.js",
    "revision": "3e5c02f3ad8f8cf3dd338a6f2b45b449"
  },
  {
    "url": "assets/js/2.9cf2826c.js",
    "revision": "f87cf9777a1e65a0614f4026eb0f0bf8"
  },
  {
    "url": "assets/js/20.5f8f29c6.js",
    "revision": "2e40e43535a631d3250bd043130357c3"
  },
  {
    "url": "assets/js/21.7fc15dc8.js",
    "revision": "b7ba46f21572ff731012aa722d2daae1"
  },
  {
    "url": "assets/js/22.55b0066d.js",
    "revision": "0e437b6b214f3411f5c0cbd1bdccba14"
  },
  {
    "url": "assets/js/23.3a1772fc.js",
    "revision": "0ab819c60afb94b6d8d61eda4818b554"
  },
  {
    "url": "assets/js/24.934e607a.js",
    "revision": "1a19cc489df3436125dea34a1bd19510"
  },
  {
    "url": "assets/js/25.ad90994c.js",
    "revision": "a5b63f4e7bdc517814626d999b917996"
  },
  {
    "url": "assets/js/26.bdc5c99b.js",
    "revision": "287c7715e685613ede320bbb6898f539"
  },
  {
    "url": "assets/js/27.76a12bea.js",
    "revision": "c504277ee85a58b4561238d1c491be8a"
  },
  {
    "url": "assets/js/28.c5bcdf74.js",
    "revision": "899b15d8a61af368061d840397b104da"
  },
  {
    "url": "assets/js/29.6dcf1eeb.js",
    "revision": "838f54f00b09d383735ea5e5361a0d04"
  },
  {
    "url": "assets/js/30.3f479c77.js",
    "revision": "06c9fbd4588ae141298e7de2b415b260"
  },
  {
    "url": "assets/js/31.c362b2c5.js",
    "revision": "10f3483e0c3cce127bb395907f1432aa"
  },
  {
    "url": "assets/js/32.690273d7.js",
    "revision": "9edb20e51a61c5e62c8c04714b9a11cc"
  },
  {
    "url": "assets/js/33.20e574cb.js",
    "revision": "14c25f08223a19359d901425a5b27349"
  },
  {
    "url": "assets/js/app.e5c9c2b1.js",
    "revision": "2a98394e4fc3a46a9a45faff919cbded"
  },
  {
    "url": "assets/js/layout-Layout.610c0c64.js",
    "revision": "386e44fb0fb29da63a445735511e661c"
  },
  {
    "url": "assets/js/layout-NotFound.6c98e4ab.js",
    "revision": "226a128c46827a1c6334d91f2c6fdeea"
  },
  {
    "url": "assets/js/page-069942c9.c5d06d76.js",
    "revision": "308eaafc730bda2f8fe117d7b8117223"
  },
  {
    "url": "assets/js/page-142fd774.cf1a5b10.js",
    "revision": "8d01d8ac4afb0cb20a22aae44b1b7069"
  },
  {
    "url": "assets/js/page-2037549c.83fdd1a1.js",
    "revision": "2e04a820acae3943b26f5cf06d45b02c"
  },
  {
    "url": "assets/js/page-22954010.e7fddfea.js",
    "revision": "22d6a9123e11783cd4c24591e1165da2"
  },
  {
    "url": "assets/js/page-25b298b6.e69f0a76.js",
    "revision": "3991fcd2a478e8df8ef099b3875a7638"
  },
  {
    "url": "assets/js/page-3c041b9e.100a104d.js",
    "revision": "389fb6a59101d339e30a6475de95a079"
  },
  {
    "url": "assets/js/page-65eaf5e4.0a187fe0.js",
    "revision": "24fd90400c1f54241947a25cc4b9fa23"
  },
  {
    "url": "assets/js/page-7205f0b4.b55078d3.js",
    "revision": "8bbfcc3e25902961224e5702d700be20"
  },
  {
    "url": "assets/js/page-e4dfaf94.3b065338.js",
    "revision": "adaa14353bd79a7f48a8bb2e2a9a7699"
  },
  {
    "url": "assets/js/page-fd1ee6b4.bb7df667.js",
    "revision": "43d8e36ecda72da5d4ea4be4a0375cb2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.debdf0f2.js",
    "revision": "fc799b14e5f615c32c4f632e5247ed1a"
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
    "revision": "12bceddaa61be04f55002456fc55eba3"
  },
  {
    "url": "doc/index.html",
    "revision": "2f03ee3a629b3f90f35dcd4beab4fa06"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "426bcaad4a9e69cd9acd3b229fc51b94"
  },
  {
    "url": "guide/index.html",
    "revision": "61523595c3092396a1a3d08ef0856ea8"
  },
  {
    "url": "guide/team/index.html",
    "revision": "b1488a5451cbb98037821bc29eeb3b6f"
  },
  {
    "url": "index.html",
    "revision": "4f8deca85f00dac0a512ebfe89b6a8cf"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "ffdfb46b88b6f954bc523e513dc2f848"
  },
  {
    "url": "py-list/index.html",
    "revision": "156ace8584b9df4d8d06a98d1e68213a"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "c2d6b40888300464ff67c34c9ee98d1f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "8dfb4c38f016fd8cc594ad4cf619287b"
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
