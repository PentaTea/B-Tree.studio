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
    "revision": "8faeca955c1437b07dbb5929e059332c"
  },
  {
    "url": "assets/css/0.styles.adca8f67.css",
    "revision": "baac5288b99f3dcabe6ed2aef5e20c40"
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
    "url": "assets/js/1.3eb00112.js",
    "revision": "d7437d0248e5f1019c95ea3448d14673"
  },
  {
    "url": "assets/js/16.0098c041.js",
    "revision": "1d10f3cade0a0886c3e6dc85a8581c00"
  },
  {
    "url": "assets/js/17.49e61ccd.js",
    "revision": "b6e337ac57541f6efe02587f852b9431"
  },
  {
    "url": "assets/js/18.b059fa53.js",
    "revision": "14c39c2cea0545b53c99ba6bb44abe60"
  },
  {
    "url": "assets/js/19.ba3b1649.js",
    "revision": "1d31c355ccd0824f57903a6489f6d9c6"
  },
  {
    "url": "assets/js/20.7470f01a.js",
    "revision": "02aa1fff6625bd082d0717ba6549effc"
  },
  {
    "url": "assets/js/21.77fa5d93.js",
    "revision": "17559b3678bbe4e400f719a63f932c5a"
  },
  {
    "url": "assets/js/22.a1b6bd62.js",
    "revision": "aa5fd27808dd6284dacb6c5f1aa60114"
  },
  {
    "url": "assets/js/23.661e7290.js",
    "revision": "b639ebf17e69609e3422ad4aef471c0f"
  },
  {
    "url": "assets/js/24.041157db.js",
    "revision": "9ba63d9c42d1941767d45e22e8b486b2"
  },
  {
    "url": "assets/js/25.6f80a65e.js",
    "revision": "38ad6d647705f3104648cecdec13bccb"
  },
  {
    "url": "assets/js/26.4ce90b00.js",
    "revision": "b4531dcf4834c4e4c9b7ab7ca614e3ab"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.7b82da35.js",
    "revision": "7d7b8c3c4de4979f6c1328bdf43100d9"
  },
  {
    "url": "assets/js/layout-Layout.b7947204.js",
    "revision": "7d73b094b3f7376cb3127f0d94c5d996"
  },
  {
    "url": "assets/js/layout-NotFound.9ccfc250.js",
    "revision": "f3f711b856868e54d10fe0c9c760aeaa"
  },
  {
    "url": "assets/js/page-1301ab8a.8f430c5b.js",
    "revision": "a1d8727f0901728ef4cfe7f8b4fe2b42"
  },
  {
    "url": "assets/js/page-142fd774.e2b340b6.js",
    "revision": "0e5b56a446290947346dfd6aa3738a27"
  },
  {
    "url": "assets/js/page-2037549c.22b334d0.js",
    "revision": "de2473d44037211e6a348c6513f19771"
  },
  {
    "url": "assets/js/page-22954010.b71ffafe.js",
    "revision": "0bf42f27aac52c779c19843a06251916"
  },
  {
    "url": "assets/js/page-25b298b6.e272265b.js",
    "revision": "7411bbb977ebe2f69fc44f94bc83c2d6"
  },
  {
    "url": "assets/js/page-3c041b9e.7b3dedd8.js",
    "revision": "3753fb5245e89af29ecb9c21297385c8"
  },
  {
    "url": "assets/js/page-65eaf5e4.9ff15b71.js",
    "revision": "a92117178a5041cae0e138cf5e497291"
  },
  {
    "url": "assets/js/page-7205f0b4.aa80f91b.js",
    "revision": "da08acedd337f0606d0bf6b6c5692ce7"
  },
  {
    "url": "assets/js/page-e4dfaf94.4ecb603c.js",
    "revision": "87e2bbaf51147a665a69310ade830af6"
  },
  {
    "url": "assets/js/page-fd1ee6b4.993d2654.js",
    "revision": "f68aa4e6fe1dea90dd37a885d075bbe2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fa9f2520.js",
    "revision": "b1f5b69b2f47b212f0f01d9e6c97a3cb"
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
    "revision": "a0fe6f8c21dad93e134779818438d64e"
  },
  {
    "url": "doc/index.html",
    "revision": "977366eb4642370e4abad584c5427873"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "8993943a7f3f2ad07e640a4e94bf6131"
  },
  {
    "url": "guide/index.html",
    "revision": "ea191c1250db6a4961b14ba7850a81a9"
  },
  {
    "url": "guide/team/index.html",
    "revision": "3773f550522598127345f690c5cbe6cd"
  },
  {
    "url": "index.html",
    "revision": "990d321149d34638bf85a7db434a6256"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "469baf52c5dc63ef52ea007a9ac19c26"
  },
  {
    "url": "py-list/index.html",
    "revision": "942d57d60ecbf2109f452f8c8c16def0"
  },
  {
    "url": "resources/index.html",
    "revision": "52a0cbe71150791b56d93b1cbe5b5a4e"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "0d2c2963e2486256d9f87e163f068be0"
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
