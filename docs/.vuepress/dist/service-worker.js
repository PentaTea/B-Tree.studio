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
    "revision": "07730eba8836e5212f49aa4f105cbf5c"
  },
  {
    "url": "assets/css/0.styles.d2a718a0.css",
    "revision": "5e4f72b4d3533a962031661c735a6e8c"
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
    "url": "assets/img/PingFangLight.61dc3db6.svg",
    "revision": "61dc3db6b8940b73312504f67b8cbc08"
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
    "url": "assets/js/1.bcbb0745.js",
    "revision": "6adc515fc6ce3e25dbe09f4b7b5c2d2d"
  },
  {
    "url": "assets/js/16.8dcf958d.js",
    "revision": "acba0bd4144ba218dfca03864e816d74"
  },
  {
    "url": "assets/js/17.444e264d.js",
    "revision": "6bfadab8a4529e76a2f8e9d9823f891f"
  },
  {
    "url": "assets/js/18.f58145e4.js",
    "revision": "6537e934a7da00669828a20fcc5dfca3"
  },
  {
    "url": "assets/js/19.c1cac152.js",
    "revision": "c5278b71db4bdbfd23b75af2a9069ba4"
  },
  {
    "url": "assets/js/20.ff8eab33.js",
    "revision": "efd80ddb8b453047605cb18e8e47742e"
  },
  {
    "url": "assets/js/21.75b0ccea.js",
    "revision": "5a9042fcfc1742bf398a2ec631595b74"
  },
  {
    "url": "assets/js/22.3b102303.js",
    "revision": "aad7c70358d810bd21f11f363cc7ba62"
  },
  {
    "url": "assets/js/23.c242bfd2.js",
    "revision": "bad685fef41f78d4706574942466dc6e"
  },
  {
    "url": "assets/js/24.b876d7ce.js",
    "revision": "38feb8b0f6909a543bf49f08cbcc02dc"
  },
  {
    "url": "assets/js/25.c6e26acc.js",
    "revision": "422102fc4d23f3afc83d4d56cb303d59"
  },
  {
    "url": "assets/js/26.c4347102.js",
    "revision": "1f6e867b2ef4a6989bc922569ebc0373"
  },
  {
    "url": "assets/js/27.9f819fff.js",
    "revision": "75b35431597cff3141567413a15f6334"
  },
  {
    "url": "assets/js/app.1a79947f.js",
    "revision": "1c20b0cc780bbdfe03e908cbc18980b9"
  },
  {
    "url": "assets/js/layout-Layout.38ea6ff5.js",
    "revision": "d3dbd9a7d1000bb4b874a766de3f1f27"
  },
  {
    "url": "assets/js/layout-NotFound.8bdcb7fd.js",
    "revision": "e97ae7be95eb0d1d38d277fa05404480"
  },
  {
    "url": "assets/js/page-1301ab8a.5240531a.js",
    "revision": "8b4f9fc4ec32b606ad58f928455c95d8"
  },
  {
    "url": "assets/js/page-142fd774.1ac5e33a.js",
    "revision": "43134d2a95e6e72060c2a86ff419529e"
  },
  {
    "url": "assets/js/page-2037549c.45df87e3.js",
    "revision": "5c62c3395fa1fe732cc2fdfaf99c2f65"
  },
  {
    "url": "assets/js/page-22954010.8fb71e4b.js",
    "revision": "18b7b3fbc9f360e7107c822804d76c87"
  },
  {
    "url": "assets/js/page-25b298b6.ba899f36.js",
    "revision": "28bbed36d8290196bc304706a9de7be3"
  },
  {
    "url": "assets/js/page-3c041b9e.fbf2ffd7.js",
    "revision": "fb2a6d8e65825c8da4ddee7d48586ffe"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c9ed91c.js",
    "revision": "5e295e700b9429ab4fedcbf94736ee50"
  },
  {
    "url": "assets/js/page-7205f0b4.e31cdeea.js",
    "revision": "cc6308cc73d0c3b3c410dc6c5f8014d8"
  },
  {
    "url": "assets/js/page-e4dfaf94.a2738b53.js",
    "revision": "52996b0696206d62ac6fbafec9225d39"
  },
  {
    "url": "assets/js/page-fd1ee6b4.fc866fa2.js",
    "revision": "d9f229ceb66bfa3aa16dcc4e13ff6122"
  },
  {
    "url": "assets/js/vendors~layout-Layout.4a070f8c.js",
    "revision": "0ce880081f6d3ec1ba47f34bb23a3ac2"
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
    "revision": "f8bf5e7e6019463cac7976b634c17e4b"
  },
  {
    "url": "doc/index.html",
    "revision": "bcb1efc1e13129b9f1e14657efa23b08"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "c657cb183b54a9eb0b4072f3c79404bd"
  },
  {
    "url": "guide/index.html",
    "revision": "2d5b60aaf82afaa91e51da38a0939dd7"
  },
  {
    "url": "guide/team/index.html",
    "revision": "88761c16921311c4d5645fe36fd0516b"
  },
  {
    "url": "index.html",
    "revision": "2e5d399a419a59b61bad6bd159151550"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "267198235325dcae69eb34158662bf86"
  },
  {
    "url": "py-list/index.html",
    "revision": "da4df3e16691ffa67a0a7182a2d331e5"
  },
  {
    "url": "resources/index.html",
    "revision": "f6ac67cbd2929893a0dde3fde4eba6ec"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "54f714f0077429bffb48675bc8c8970e"
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
