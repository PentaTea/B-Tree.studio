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
    "revision": "1bec29aa0ad360964a645db247f8f2e3"
  },
  {
    "url": "assets/css/0.styles.2ae578fb.css",
    "revision": "cd522e5429f2783f4af2bbdc36f0fd2a"
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
    "url": "assets/js/16.efe7c5c5.js",
    "revision": "962cbc3de72ea576e9ca5f374598bdad"
  },
  {
    "url": "assets/js/17.444e264d.js",
    "revision": "6bfadab8a4529e76a2f8e9d9823f891f"
  },
  {
    "url": "assets/js/18.abdd9f2e.js",
    "revision": "2a16ab6989fa2b826cdf97a492a8aa32"
  },
  {
    "url": "assets/js/19.05698df5.js",
    "revision": "e0d79caa2ea51baa8e0b19336666732d"
  },
  {
    "url": "assets/js/20.389a8f42.js",
    "revision": "2b3890fb99982fb85f6a6082dcf387df"
  },
  {
    "url": "assets/js/21.4ab6af0a.js",
    "revision": "94e4be0f1294deb43125966f546bc141"
  },
  {
    "url": "assets/js/22.df821c9c.js",
    "revision": "bbe3180244a5d12debbeda2cc0b0302a"
  },
  {
    "url": "assets/js/23.c242bfd2.js",
    "revision": "bad685fef41f78d4706574942466dc6e"
  },
  {
    "url": "assets/js/24.81564a58.js",
    "revision": "e771b13ca44ca577c9ec3db48dd5829c"
  },
  {
    "url": "assets/js/25.c6e26acc.js",
    "revision": "422102fc4d23f3afc83d4d56cb303d59"
  },
  {
    "url": "assets/js/26.0fb301a3.js",
    "revision": "ad0a4b1dc755d279c81e108555d57204"
  },
  {
    "url": "assets/js/27.9f819fff.js",
    "revision": "75b35431597cff3141567413a15f6334"
  },
  {
    "url": "assets/js/app.cd978586.js",
    "revision": "8bf539cad0147e1a3a7700b9338e50ff"
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
    "url": "assets/js/page-1301ab8a.18262c03.js",
    "revision": "dace3fa3f7676b04997c39df97e30039"
  },
  {
    "url": "assets/js/page-142fd774.7c8a2211.js",
    "revision": "f08bb390b7419c5984dfc484470f666a"
  },
  {
    "url": "assets/js/page-2037549c.1efd32d0.js",
    "revision": "bbf333edc338660a93e02d8836ad435c"
  },
  {
    "url": "assets/js/page-22954010.045babb0.js",
    "revision": "94e65f993bdb8fc492377b23a0123ba4"
  },
  {
    "url": "assets/js/page-25b298b6.087371fe.js",
    "revision": "2f739e05a208cdab2b72ca738e1b4264"
  },
  {
    "url": "assets/js/page-3c041b9e.d4a0fb8d.js",
    "revision": "85b90d1926840f2836253d5169cf442a"
  },
  {
    "url": "assets/js/page-65eaf5e4.2eece479.js",
    "revision": "279766432f9c6c0052bd489e3993fa36"
  },
  {
    "url": "assets/js/page-7205f0b4.09a7d9fa.js",
    "revision": "d2cbef103255d089cc4f302ec5241817"
  },
  {
    "url": "assets/js/page-e4dfaf94.078a21c8.js",
    "revision": "5fe30f964c69fd410039152abc43a991"
  },
  {
    "url": "assets/js/page-fd1ee6b4.f50d75f8.js",
    "revision": "3ef89deb5f215b1d743b1b547a722532"
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
    "revision": "4e3c6aae4ef934e2dd1e91bbb2ca4d8e"
  },
  {
    "url": "doc/index.html",
    "revision": "02e4b3a4df3ae23ea91c74ad077bde18"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "3e63e2becbc0dac67cf043a3ee61103e"
  },
  {
    "url": "guide/index.html",
    "revision": "e616c0e1cc91d232059fd33392a4b638"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f81e5e74d14744dce64327f5f62c5727"
  },
  {
    "url": "index.html",
    "revision": "5ce8e6da54e474d51c95f5c6077d62c3"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "a5832cdc34d84becf6532dfd7a741355"
  },
  {
    "url": "py-list/index.html",
    "revision": "dd17f19ada35df01635524b538bf8b81"
  },
  {
    "url": "resources/index.html",
    "revision": "567a6516d246631425d0546d3a370033"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "dd7a54715352557b125cff8cb20e7263"
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
