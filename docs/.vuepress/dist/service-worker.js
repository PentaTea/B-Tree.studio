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
    "revision": "703ad344a5e0a4bd530fb18900a44a72"
  },
  {
    "url": "assets/css/0.styles.45e643e7.css",
    "revision": "c1f6229853f00f9fcbca58d7c7b544e9"
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
    "url": "assets/js/1.6c906df0.js",
    "revision": "8a6f46c4a8982b1d59be5c1c75e00436"
  },
  {
    "url": "assets/js/17.9fb0580c.js",
    "revision": "230e6a6aa9aeaad7036cc3c1cc58c692"
  },
  {
    "url": "assets/js/18.a4275527.js",
    "revision": "c517eddf2d182f45b1332c19d7aca185"
  },
  {
    "url": "assets/js/19.d8f50856.js",
    "revision": "822c3db23dd0fee62dfb18261769c637"
  },
  {
    "url": "assets/js/2.6c0775b7.js",
    "revision": "a25f421d199f7c430e0eac444f7bebb9"
  },
  {
    "url": "assets/js/20.478b1c86.js",
    "revision": "d93435dd94c073053a8793b66b7c2e29"
  },
  {
    "url": "assets/js/21.a7b10a0f.js",
    "revision": "1bd490281563ec7c387d1aafac854247"
  },
  {
    "url": "assets/js/22.d0a04e13.js",
    "revision": "b5b26ff1bea97e258ce6d9d7f0069226"
  },
  {
    "url": "assets/js/23.43e28f06.js",
    "revision": "8816c9f921e2dc112985bfe9c427c52b"
  },
  {
    "url": "assets/js/24.b6d34daa.js",
    "revision": "379ddb88a9d58f16b2e4a2b2a616cbbe"
  },
  {
    "url": "assets/js/25.f4f5abf4.js",
    "revision": "6aa0d30a2ee4737e5c8f92fa957cc468"
  },
  {
    "url": "assets/js/26.6c305651.js",
    "revision": "4905251c4e4ec63690e8f16b154b09ec"
  },
  {
    "url": "assets/js/27.e5ce8fec.js",
    "revision": "14d6380a5132113f02d6839bb1572a4b"
  },
  {
    "url": "assets/js/28.9be7efd7.js",
    "revision": "6afcc342e9728989aca01643c2940c9c"
  },
  {
    "url": "assets/js/29.53342ed7.js",
    "revision": "e75c453e66a4525c0fac2bca6542c930"
  },
  {
    "url": "assets/js/30.32896947.js",
    "revision": "64a0cde84aed48f33f3faa709385a4ac"
  },
  {
    "url": "assets/js/app.5bbb25e0.js",
    "revision": "6d8cf12c7e994fb05e69cc2924d25f9d"
  },
  {
    "url": "assets/js/layout-Layout.586540f5.js",
    "revision": "91cb07dc1b81ef169e3abc7a5768a5c6"
  },
  {
    "url": "assets/js/layout-NotFound.5989fa81.js",
    "revision": "2c7d2783b8198dc68a4495590190287d"
  },
  {
    "url": "assets/js/page-069942c9.03519473.js",
    "revision": "e56aae7b20b3ceda7c378e1441cc6595"
  },
  {
    "url": "assets/js/page-142fd774.116d2c6b.js",
    "revision": "18e7cae3be1935e17ce839f71f7ab15f"
  },
  {
    "url": "assets/js/page-2037549c.dc137413.js",
    "revision": "eea936eb99cab58dfbac6f9f081efe5c"
  },
  {
    "url": "assets/js/page-22954010.b9f86d1c.js",
    "revision": "68aff721349015005db989929e638432"
  },
  {
    "url": "assets/js/page-25b298b6.9def04a0.js",
    "revision": "e811484ddf9b7179f2b9905f8fc83b9e"
  },
  {
    "url": "assets/js/page-3c041b9e.ef9b1b78.js",
    "revision": "193c75034e01c26911779cec1990fbff"
  },
  {
    "url": "assets/js/page-65eaf5e4.7270627c.js",
    "revision": "397abbdc6f26f5664cddad1f982c1d16"
  },
  {
    "url": "assets/js/page-7205f0b4.462635fe.js",
    "revision": "ff20c4bda2ae8a41064fe47ca4250eae"
  },
  {
    "url": "assets/js/page-e4dfaf94.bc4c735a.js",
    "revision": "6f27df0946362c26ad14b678b52cfef8"
  },
  {
    "url": "assets/js/page-fd1ee6b4.e3fe0d1f.js",
    "revision": "6cd82f5ea51020382db95f0e12cc686d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.60e64c74.js",
    "revision": "20046757cb27e9f529d3f84a3d311bd4"
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
    "revision": "dff4fd0955ed9bdfbfda1c4f7ee5affb"
  },
  {
    "url": "doc/index.html",
    "revision": "043ea7f03abcee631e00c1facee29a21"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "add321d14ba9662f688a41ffcc704e58"
  },
  {
    "url": "guide/index.html",
    "revision": "e724fe240c2f8c51ad0a04b28c217f81"
  },
  {
    "url": "guide/team/index.html",
    "revision": "dcc658530be9b64f799e45ffe66b60b5"
  },
  {
    "url": "index.html",
    "revision": "61085a5ff3a6aa90d7aa895b1d8d76ba"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "ae15451793c33a287f017008213886cc"
  },
  {
    "url": "py-list/index.html",
    "revision": "8c2a0942d384172a8c26e31b383c2bf7"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "8c61155a2a9232c2109d63a80333ff13"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "a71690fd0316f05a24b71d3ff78c0363"
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
