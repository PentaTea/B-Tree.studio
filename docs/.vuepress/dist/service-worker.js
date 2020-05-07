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
    "revision": "4e4f0bba53015aa13115656e9eb8b03b"
  },
  {
    "url": "assets/css/0.styles.be0871f5.css",
    "revision": "201baddb337d9f68ed88dd7ab4742a32"
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
    "url": "assets/js/19.e278affa.js",
    "revision": "73c16fb7a054c34ef128b6f1ea136234"
  },
  {
    "url": "assets/js/2.9cf2826c.js",
    "revision": "f87cf9777a1e65a0614f4026eb0f0bf8"
  },
  {
    "url": "assets/js/20.4a81801a.js",
    "revision": "4ef2fa8848d952a4b992a052addf5739"
  },
  {
    "url": "assets/js/21.69c774ac.js",
    "revision": "1e3cc883e6004b6b30de79327061d25d"
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
    "url": "assets/js/24.480d737a.js",
    "revision": "0ae2ed2f29a47761ed73df64a9de78a2"
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
    "url": "assets/js/29.b5cf8337.js",
    "revision": "7ec20fbbb5bc18e1c0cdf9a18cf52b6e"
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
    "url": "assets/js/app.5e6bb2f7.js",
    "revision": "3c2c77fcf493ac189d9d67f613fb8f29"
  },
  {
    "url": "assets/js/layout-Layout.f6ba5fd8.js",
    "revision": "db955a7416540c4570c34cc06d7bd9ec"
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
    "url": "assets/js/page-142fd774.9a139ac8.js",
    "revision": "b4b3d98f2cd9dc7899b3390fc0c510d7"
  },
  {
    "url": "assets/js/page-2037549c.5a75e2df.js",
    "revision": "31797161614172d10aca2fbebc1c7104"
  },
  {
    "url": "assets/js/page-22954010.38cbb5f1.js",
    "revision": "db97e7a0cb16e41a3229ece035305ce5"
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
    "url": "assets/js/page-65eaf5e4.e75bd37a.js",
    "revision": "692df43ef9b0e0a9e8c698fe90226232"
  },
  {
    "url": "assets/js/page-7205f0b4.307d1de6.js",
    "revision": "8333f12274f8a5a08c1a985d9304881e"
  },
  {
    "url": "assets/js/page-e4dfaf94.f59f3efb.js",
    "revision": "7aff12e0ea886364feb41d12588f54b7"
  },
  {
    "url": "assets/js/page-fd1ee6b4.a0ba7bae.js",
    "revision": "ff9aa6addaf3bcca6a073d7a045f0c5c"
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
    "revision": "ea7deaf4bbeb5f30d2e9aceecd616bf3"
  },
  {
    "url": "doc/index.html",
    "revision": "30127c4df97dcd6258487bdcbf82c6f4"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "164c20a35a1faa5235f0c7a2af5dbb99"
  },
  {
    "url": "guide/index.html",
    "revision": "752e8ccdcf0e63eca2e45611db5a69af"
  },
  {
    "url": "guide/team/index.html",
    "revision": "66362d2301d45ad8c54d36107db7abf1"
  },
  {
    "url": "index.html",
    "revision": "e4a5b2227adc9f725d79498bc75a4941"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "0662f359a0d989d89fb082465834ce40"
  },
  {
    "url": "py-list/index.html",
    "revision": "729649b89ba265ff1bf5806e4e1f3e0f"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "b3da52f38358ecb7b58895609dbc02c9"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "85d716d8ca36dd0f9268fba16b78d3e6"
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
