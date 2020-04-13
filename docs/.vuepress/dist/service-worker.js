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
    "revision": "23841e81512398aab411c0cc0d6e561a"
  },
  {
    "url": "assets/css/0.styles.3d93545f.css",
    "revision": "c8837e7ef5b81bbef5fdc49288df15c2"
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
    "url": "assets/js/15.b8d528b6.js",
    "revision": "b2c639c70e70c766a9d75063dc312f5e"
  },
  {
    "url": "assets/js/16.b76e3fd9.js",
    "revision": "88afc5d3b7f88209f40290bbdced34f1"
  },
  {
    "url": "assets/js/17.7e2101b8.js",
    "revision": "03882988ff5e5979293ed413939c67e6"
  },
  {
    "url": "assets/js/18.cd050bfa.js",
    "revision": "7efe965240952b600801357dda4d96c9"
  },
  {
    "url": "assets/js/19.da7e7ae5.js",
    "revision": "d248ec2bdff917b6e88007e28e01339a"
  },
  {
    "url": "assets/js/20.29a57e06.js",
    "revision": "e4b26e61a435258bf11330a423459da6"
  },
  {
    "url": "assets/js/21.a6c68624.js",
    "revision": "5c6970e0dcddbb4c7d9d59e1a48873f9"
  },
  {
    "url": "assets/js/22.308b35a0.js",
    "revision": "74429477d68691ece058c56b4068201c"
  },
  {
    "url": "assets/js/23.4d4cc199.js",
    "revision": "8ed55a3d82a6669b808b31551aed6eb9"
  },
  {
    "url": "assets/js/24.855b77c6.js",
    "revision": "2890706c3ec850691e7168d19412373e"
  },
  {
    "url": "assets/js/25.6707c197.js",
    "revision": "25d9a7eaa7909fe9024774592fea990e"
  },
  {
    "url": "assets/js/26.c979798d.js",
    "revision": "370a521a6daed6e36bc2a527c4bde8dd"
  },
  {
    "url": "assets/js/app.e92b15f9.js",
    "revision": "5a6681001a93197344eab17ef9af3e71"
  },
  {
    "url": "assets/js/layout-Layout.6410e5a3.js",
    "revision": "797aeb581133e8e8fe537823a6b10456"
  },
  {
    "url": "assets/js/layout-NotFound.f973f2ea.js",
    "revision": "49f5351e2aea290a68a9a83dfd0e6111"
  },
  {
    "url": "assets/js/page-1301ab8a.82b6d1d7.js",
    "revision": "42997de6f80c5625d0eeba021b2e4cbf"
  },
  {
    "url": "assets/js/page-142fd774.a1889558.js",
    "revision": "75891e9d30cca32514760a3ab3374ea6"
  },
  {
    "url": "assets/js/page-2037549c.16913942.js",
    "revision": "58bcf7240be7b6af1c43dcb8581d2561"
  },
  {
    "url": "assets/js/page-22954010.d9cd9415.js",
    "revision": "58ba4f4b0b95948d170fb0a287232aa6"
  },
  {
    "url": "assets/js/page-25b298b6.3c620c84.js",
    "revision": "a50d40a8b281099d35b6a6d01b978b01"
  },
  {
    "url": "assets/js/page-3c041b9e.d3b97ee6.js",
    "revision": "af9196f28aa8045661d947d080f16c1a"
  },
  {
    "url": "assets/js/page-65eaf5e4.dfd2a8f6.js",
    "revision": "250548fe9b6243975a97631c3069fa6c"
  },
  {
    "url": "assets/js/page-7205f0b4.af50fc8e.js",
    "revision": "fa61d24cf1d4a41e6c6595fbe653fcbe"
  },
  {
    "url": "assets/js/page-e4dfaf94.2e1bdd4c.js",
    "revision": "8b3b2a7ccc4d596e16114680c4b3eada"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fd887c25.js",
    "revision": "891fb62a1b571160d2740f4a5a50dc79"
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
    "revision": "42d67ac5a5308401a11fbe36fc173b8d"
  },
  {
    "url": "doc/index.html",
    "revision": "3eb97817dabf50a2e3062f587429ad05"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "ba67dad4b7d864eaa2b975e1f5f8c61b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "399a417b7af72de47b15d06d78c7aa6d"
  },
  {
    "url": "index.html",
    "revision": "8a77a51f4b75373e95f02fa2449427ce"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "3258b6147cc90b3caa95531b4c6a8084"
  },
  {
    "url": "py-list/index.html",
    "revision": "960e1b0ef5d4e57c7b8b710fde302d8b"
  },
  {
    "url": "resources/index.html",
    "revision": "f33dc3d6c2b4633f8be9901ecac61917"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "8bb84cc61dabe4ec9210c517102b97df"
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
