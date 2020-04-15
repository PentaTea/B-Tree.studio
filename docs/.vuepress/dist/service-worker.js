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
    "revision": "f0dcc6fcddb9380a75f025ee98d03e89"
  },
  {
    "url": "assets/css/0.styles.44ad2eec.css",
    "revision": "1e3b676d48cbed6f5ccea06cbaf0ce50"
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
    "url": "assets/js/1.f9f8c02d.js",
    "revision": "a0a378bfae3bb5d86195ae679a7064cf"
  },
  {
    "url": "assets/js/16.ded87fc7.js",
    "revision": "5305ecdcacbf665d9bdce2b913d6e62c"
  },
  {
    "url": "assets/js/17.0f28a0db.js",
    "revision": "a7c802c437df924f203992ba26f2e31b"
  },
  {
    "url": "assets/js/18.c5cbd3a2.js",
    "revision": "24869b040de5d82e3fb43082b370b63f"
  },
  {
    "url": "assets/js/19.f4ea9e95.js",
    "revision": "a6e1e417cb662b136d7f392646fb0715"
  },
  {
    "url": "assets/js/20.ad9dab1b.js",
    "revision": "3587191237122ff80d490a6fc5c17f22"
  },
  {
    "url": "assets/js/21.cdab8215.js",
    "revision": "687c5c672e9e16b37156e3264c71c7ca"
  },
  {
    "url": "assets/js/22.7b28aa50.js",
    "revision": "ddc65d7f78fab485da58358f041e20e0"
  },
  {
    "url": "assets/js/23.374e57cb.js",
    "revision": "c97754f0c346a62ca38dc9ad8a59b5fc"
  },
  {
    "url": "assets/js/24.a1b6bc75.js",
    "revision": "643e67b1ab27a38bba9b7c36d1e130a2"
  },
  {
    "url": "assets/js/25.1e836bfb.js",
    "revision": "2347e46ffad1b7ee189eb4a319c0862c"
  },
  {
    "url": "assets/js/26.a2556a18.js",
    "revision": "7c06ab9840e237f97e150d78a3f96d5c"
  },
  {
    "url": "assets/js/27.9f819fff.js",
    "revision": "75b35431597cff3141567413a15f6334"
  },
  {
    "url": "assets/js/app.341c9cd7.js",
    "revision": "d35ea1ac3842ed04669236e764fd82c5"
  },
  {
    "url": "assets/js/layout-Layout.ab36c016.js",
    "revision": "9606e92f9e47a5e59b3135cad8ea7707"
  },
  {
    "url": "assets/js/layout-NotFound.5e7dda8b.js",
    "revision": "4bd6e00bc8e7e14c3eeda974afd14181"
  },
  {
    "url": "assets/js/page-1301ab8a.e6dd2e2f.js",
    "revision": "880fed0a8d537a9e227177aeae46ef02"
  },
  {
    "url": "assets/js/page-142fd774.da5c74a5.js",
    "revision": "a444c676b4c09aa9ca25e2a28ee06dc9"
  },
  {
    "url": "assets/js/page-2037549c.ccdc5349.js",
    "revision": "d1ce98144123be11a2a43d2fd893e47a"
  },
  {
    "url": "assets/js/page-22954010.200ee188.js",
    "revision": "0d20d334c0d06c366ba858b511c8912a"
  },
  {
    "url": "assets/js/page-25b298b6.ffcd55ca.js",
    "revision": "81fd6183970a9d8c052dfaa5e3ac850b"
  },
  {
    "url": "assets/js/page-3c041b9e.2901e1d6.js",
    "revision": "83d52891cd72f82b1c5e50fbae60e3fa"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c93c0b4.js",
    "revision": "cc5cefa5e341846d46bf4c2d508f1a9f"
  },
  {
    "url": "assets/js/page-7205f0b4.f61ae94a.js",
    "revision": "bced111757a9e2dbbf058fa820791f9d"
  },
  {
    "url": "assets/js/page-e4dfaf94.348a270d.js",
    "revision": "73ce0091fb712cd7c6b87912b6cb670e"
  },
  {
    "url": "assets/js/page-fd1ee6b4.5d942a9b.js",
    "revision": "05bce87a517f4adb584e6d5f98916ccb"
  },
  {
    "url": "assets/js/vendors~layout-Layout.f74ff16b.js",
    "revision": "03dd8ca5df01ab250c119403dc49ae19"
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
    "revision": "b503b10d0b36861f5aa717346b6d1c8e"
  },
  {
    "url": "doc/index.html",
    "revision": "7980833daa59f603acc273f844363460"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "1a4e7266b259d18d18f73af2ed0b02c0"
  },
  {
    "url": "guide/index.html",
    "revision": "007402c88a968fd342c8769925cb8ef0"
  },
  {
    "url": "guide/team/index.html",
    "revision": "2d4a62c647b50deb4f900aab43f316a3"
  },
  {
    "url": "index.html",
    "revision": "c2c0c268ed9b9fe5b22c5e85e53a9f7f"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "4653e3b2bed8eb8bc40dba427c929387"
  },
  {
    "url": "py-list/index.html",
    "revision": "cfee6e5bc70cd3e86274e73a439cb682"
  },
  {
    "url": "resources/index.html",
    "revision": "4df3f996620652ef19f3640b10098ef9"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "4154f24249880ebed884ef7ebe9ee0f8"
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
