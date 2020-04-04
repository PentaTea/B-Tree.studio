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
    "revision": "7835c82d80a30379c66ae839e0f848f9"
  },
  {
    "url": "assets/css/0.styles.04c75ef6.css",
    "revision": "09b24a1f226f2129d5753a986652ffe4"
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
    "url": "assets/js/1.468b3d44.js",
    "revision": "438e1845c3a03e6224ebc5311d2a7d2a"
  },
  {
    "url": "assets/js/15.b6162f50.js",
    "revision": "3e4200e86626d94c8dbfc60632f723dc"
  },
  {
    "url": "assets/js/16.3ee7b6a6.js",
    "revision": "dd74a657163f59850ed653c5a2738e09"
  },
  {
    "url": "assets/js/17.cb548154.js",
    "revision": "1d7413f62161a59208fc99e6ac8ac354"
  },
  {
    "url": "assets/js/18.e481187e.js",
    "revision": "4d133dba228d49d9642e0bf9780a86d4"
  },
  {
    "url": "assets/js/19.3bc8690c.js",
    "revision": "a28f3e231e502f50c08cbdad46178856"
  },
  {
    "url": "assets/js/20.aa263bfa.js",
    "revision": "36dcd58c8e03f6c229f4d86f95dcd02f"
  },
  {
    "url": "assets/js/21.1a0410e2.js",
    "revision": "e7ad6881dddc4c96f91ffdf87621c2be"
  },
  {
    "url": "assets/js/22.1b008fd2.js",
    "revision": "d044695084a405ab1438c1a61cf3f466"
  },
  {
    "url": "assets/js/23.0d3e64fc.js",
    "revision": "5c707b69ba106b35c3b38835aa9bfd18"
  },
  {
    "url": "assets/js/24.e859a96e.js",
    "revision": "70908fd153c5c9ed08838a606a45cf54"
  },
  {
    "url": "assets/js/app.74484a90.js",
    "revision": "a72afd395b7b1e73b4af3eedc167f47f"
  },
  {
    "url": "assets/js/layout-Layout.4f3326ce.js",
    "revision": "d386173a83d4fdf148918b0f38ab39ec"
  },
  {
    "url": "assets/js/layout-NotFound.74e27940.js",
    "revision": "cd14f5c812f0e9ce46b2c78848584680"
  },
  {
    "url": "assets/js/page-1301ab8a.e5d1416d.js",
    "revision": "a88ad32724676a9ee4ab9e1ad1c4ca19"
  },
  {
    "url": "assets/js/page-142fd774.ce496e2c.js",
    "revision": "ffd1d3ead76f4ac93427ba1c129adadf"
  },
  {
    "url": "assets/js/page-2037549c.9fc2356d.js",
    "revision": "44ece95db605901f04e661ef21a34510"
  },
  {
    "url": "assets/js/page-22954010.8406d3e7.js",
    "revision": "8e8096fbb06614b159aab87b43f50cf5"
  },
  {
    "url": "assets/js/page-25b298b6.ba06d309.js",
    "revision": "6a5f3c10f9f80b9e4e5a40bc47c39bd6"
  },
  {
    "url": "assets/js/page-3c041b9e.a1d12cc1.js",
    "revision": "ceec58f4e06c24e94de9bb70062e164a"
  },
  {
    "url": "assets/js/page-65eaf5e4.f790fbd3.js",
    "revision": "1667a29393acc5b34adf5889995dbebf"
  },
  {
    "url": "assets/js/page-7205f0b4.10856bd0.js",
    "revision": "94c151a0a9572779ae8314bbf2fa19b0"
  },
  {
    "url": "assets/js/page-e4dfaf94.b40e8c9a.js",
    "revision": "ee2aaf517d2e3d3237b618501a9b271d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.c8c3f0b4.js",
    "revision": "f77ad8854c581a5fd48b971c0f817ffa"
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
    "revision": "f513a1be855cd97c5e0dfe223d8abd82"
  },
  {
    "url": "doc/index.html",
    "revision": "1afd0373baa043b7f4dc7cb4e8f55491"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "16879127cf273dd53436233faaf724e6"
  },
  {
    "url": "guide/team/index.html",
    "revision": "932d5ac6c121180eaf2c6fbff2bb2304"
  },
  {
    "url": "index.html",
    "revision": "fde82aec491f9aa005a67bb119597b0f"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "7788ce990d9660d61068eb82787a46b1"
  },
  {
    "url": "py-list/index.html",
    "revision": "2f8866cef2b04b0655ce9cdaf4978812"
  },
  {
    "url": "resources/index.html",
    "revision": "cc4b22aaa6851ea33ef322a9fb3feca9"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "e8f1b4db6e1a0b7f4fdc078012050f5e"
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
