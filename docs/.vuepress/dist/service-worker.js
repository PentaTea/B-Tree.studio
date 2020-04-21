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
    "revision": "fb9602fbc2fde446e8faa0f6f8840dc0"
  },
  {
    "url": "assets/css/0.styles.0215955d.css",
    "revision": "f21fe2fe948e757b38270734bd71691a"
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
    "url": "assets/js/1.2ebe4dce.js",
    "revision": "409fe1117b89b5ac32ae77b03cf92bf8"
  },
  {
    "url": "assets/js/16.f1c17f31.js",
    "revision": "9512d573dd2feaff4846b0e97e4ca1c3"
  },
  {
    "url": "assets/js/17.28005eae.js",
    "revision": "fa7a3be2a835439e7f07aef772a628c5"
  },
  {
    "url": "assets/js/18.dcebadfd.js",
    "revision": "2eb9887991220785a68a9233cb9f380d"
  },
  {
    "url": "assets/js/19.075a1410.js",
    "revision": "7729e1ac34e25ad07bf88924219248a6"
  },
  {
    "url": "assets/js/20.f30bd19f.js",
    "revision": "5324dac83fc78d63c966856a71eb9b95"
  },
  {
    "url": "assets/js/21.d5ba5d68.js",
    "revision": "dc39688f49bdf1a6070d4761e4756df1"
  },
  {
    "url": "assets/js/22.0314499e.js",
    "revision": "c111d2a552c3bb925ce365c29a313efc"
  },
  {
    "url": "assets/js/23.bbe82dd5.js",
    "revision": "b54c08b485d397d4ca785f96b9cb31ff"
  },
  {
    "url": "assets/js/24.21388dbd.js",
    "revision": "c3da42ac636ab7677c638ef4fa9e7fab"
  },
  {
    "url": "assets/js/25.362f9ff1.js",
    "revision": "36816b379820ffb0840e99f64daac02b"
  },
  {
    "url": "assets/js/26.92829e82.js",
    "revision": "713a1c3c8c2a5015edf6abb0c45fbbf1"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.8da94137.js",
    "revision": "7a2e3da8b1d1176e4c0fb9570201e707"
  },
  {
    "url": "assets/js/layout-Layout.d6d254c6.js",
    "revision": "5e24260d3c2012d46bd12396e87bdbab"
  },
  {
    "url": "assets/js/layout-NotFound.9ac4d0e6.js",
    "revision": "c2b77227a46a592252048783c4908306"
  },
  {
    "url": "assets/js/page-1301ab8a.5240531a.js",
    "revision": "8b4f9fc4ec32b606ad58f928455c95d8"
  },
  {
    "url": "assets/js/page-142fd774.769a751c.js",
    "revision": "7a13c88d218be2c8c7da828d23031c1d"
  },
  {
    "url": "assets/js/page-2037549c.880a86ab.js",
    "revision": "6f87655ec570010625c533f62a0450f8"
  },
  {
    "url": "assets/js/page-22954010.310493c1.js",
    "revision": "48cea01173a3e5298bc92fdec49dd685"
  },
  {
    "url": "assets/js/page-25b298b6.5a995012.js",
    "revision": "b7d5af4865339371495286ae76c3cfe3"
  },
  {
    "url": "assets/js/page-3c041b9e.d4a0fb8d.js",
    "revision": "85b90d1926840f2836253d5169cf442a"
  },
  {
    "url": "assets/js/page-65eaf5e4.67c19936.js",
    "revision": "48e1b88c9176a1a4cd6a3eec8740ae24"
  },
  {
    "url": "assets/js/page-7205f0b4.dd9b56a5.js",
    "revision": "4d72398d0cae25a2e614e4bfb872d961"
  },
  {
    "url": "assets/js/page-e4dfaf94.f6428fad.js",
    "revision": "16cff9fe1df3862f5d346997ea190e35"
  },
  {
    "url": "assets/js/page-fd1ee6b4.933463fc.js",
    "revision": "bb9256556899038d0400102585cb59d2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9c274e2f.js",
    "revision": "0fdeb1473781e8e67a6d884128893dc1"
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
    "revision": "675657b9f201f8e277ea7b472732786d"
  },
  {
    "url": "doc/index.html",
    "revision": "35edeed0443579076c0b6f92c7e7d781"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "1a74789d1caac6d010041eea7a40c5a9"
  },
  {
    "url": "guide/index.html",
    "revision": "0f4903b311d41a9601b4ccf9ce8fa3ff"
  },
  {
    "url": "guide/team/index.html",
    "revision": "68aca3010250250007153be89103369d"
  },
  {
    "url": "index.html",
    "revision": "e669da328a27a15585fb360b0149da65"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "92b4be735e1bf184bc8e885efbb4c828"
  },
  {
    "url": "py-list/index.html",
    "revision": "acdd83554d68c677a33541cdfe02b9a4"
  },
  {
    "url": "resources/index.html",
    "revision": "e4c87792f3ae81ae5c631323eba4fa6b"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "d34fbe8e37f7131f6b9975f2283078f2"
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
