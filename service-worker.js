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
    "revision": "90c46d934b925c80355ea75bfafc310c"
  },
  {
    "url": "assets/css/0.styles.45a20ea4.css",
    "revision": "7f33cb6ea0a12edc701b4494c3627049"
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
    "url": "assets/img/1bjdXEarkgJvcQU.png",
    "revision": "9555a2d251cf0c06df24142974beaabb"
  },
  {
    "url": "assets/img/20200518181948.92fa4486.png",
    "revision": "92fa4486007cebef0964f7d44670ccba"
  },
  {
    "url": "assets/img/20200518182107.450755da.png",
    "revision": "450755da661fc7491ad221ab7c523d97"
  },
  {
    "url": "assets/img/20200518182220.071dfacb.png",
    "revision": "071dfacb044a239376408f9143e2bdff"
  },
  {
    "url": "assets/img/20200518190048.9b1c2ba1.png",
    "revision": "9b1c2ba173250a35a57ef5ef6c0c595a"
  },
  {
    "url": "assets/img/20200518192315.bdd8b570.png",
    "revision": "bdd8b5707c635c3692c3e85ddd11ea8e"
  },
  {
    "url": "assets/img/20200518193136.ff204ca4.png",
    "revision": "ff204ca4c1c0bd1e1edf597054554893"
  },
  {
    "url": "assets/img/20200518203526.83fceb88.png",
    "revision": "83fceb88e8114e7bb9cf1f81665d89b8"
  },
  {
    "url": "assets/img/20200518203635.296d0808.png",
    "revision": "296d0808756e28204357e704c26b1802"
  },
  {
    "url": "assets/img/20200629191625.903944a2.png",
    "revision": "903944a2de3302560e6a5b7c33c1f08c"
  },
  {
    "url": "assets/img/20200727003001.fd5fa6d7.png",
    "revision": "fd5fa6d714ab11448a8f1dd68806639b"
  },
  {
    "url": "assets/img/20200727003052.bf9e58c4.png",
    "revision": "bf9e58c4b44abb9b4da2897eb89092c8"
  },
  {
    "url": "assets/img/20201125121139.cb8236d6.png",
    "revision": "cb8236d686e94decd39710a9b97c4d48"
  },
  {
    "url": "assets/img/6cGE9MbCoefiKy5.jpg",
    "revision": "9a716c274ba7e7269e51502a708a88a1"
  },
  {
    "url": "assets/img/asZjvohWRBJIHyg.png",
    "revision": "0fcc3ba360e54f89297fe7b35f862c0a"
  },
  {
    "url": "assets/img/aXwpjgNA97z8LuS.png",
    "revision": "8cd3f2b18baf218432bbe44a50b99d3b"
  },
  {
    "url": "assets/img/AydI2o3pub4qOJm.jpg",
    "revision": "4a622ea5110fd115d14689a8b9ecd5c7"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/CVvMpid8TjYH4oG.png",
    "revision": "8af18b2d8da6b0d74f8a519138b3a0c6"
  },
  {
    "url": "assets/img/cVXlM1iD2j3SL6q.jpg",
    "revision": "756c0ac0bdca532cf3aa6eb15381cdae"
  },
  {
    "url": "assets/img/E1rQwlesOC7VZvW.png",
    "revision": "0e85baba877b3bba1674a8a0f6ad1ca4"
  },
  {
    "url": "assets/img/g72jWzlRxGCIqEY.png",
    "revision": "a4aec2d7a9d21a76fc3c32df7279f33c"
  },
  {
    "url": "assets/img/HV5jrQcbWin2mUF.png",
    "revision": "f2ea62603e24b4c7a7334e65c8179019"
  },
  {
    "url": "assets/img/kRPThjFDVi6QB8N.jpg",
    "revision": "e94724a0d9ba6f40a16b268d9f38ecf2"
  },
  {
    "url": "assets/img/mRwvXZNS1gJHYVq.png",
    "revision": "c66df08e18e0500331b75fa5509cc7e5"
  },
  {
    "url": "assets/img/odnS98kAyKlGVxT.png",
    "revision": "36f6590ac0accfca11c58358a3748bc0"
  },
  {
    "url": "assets/img/OXIMf6wYjevxbmg.png",
    "revision": "aba0a0d3447bb42f34d4a8e51539f6a7"
  },
  {
    "url": "assets/img/P3dqu4HsKwcbg8r.png",
    "revision": "d2e48b3e856c54328979b81d7cbc43af"
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
    "url": "assets/img/Reimu_thinking.jpg",
    "revision": "dc11ef58975c4f0ce59d45366e7d7873"
  },
  {
    "url": "assets/img/Screenshot_20201124114508.a495ce00.jpg",
    "revision": "a495ce00457853e2da927b21e92836cf"
  },
  {
    "url": "assets/img/Screenshot_20201124114535.5655c994.jpg",
    "revision": "5655c9946a2f15b0c9fcc5b4d597d1b6"
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
    "url": "assets/img/tgH1GWJEPcSV8Nr.png",
    "revision": "77156f0483a254d2e55bdf4b74f3ddfe"
  },
  {
    "url": "assets/img/tmH1zJbae2C7GsF.png",
    "revision": "e72ab7cb0244b54f50a77f5915ef14f9"
  },
  {
    "url": "assets/img/TMs1Ora2GeoDXQC.png",
    "revision": "aa286ed2e319ee9d3d2eb471f82aae60"
  },
  {
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/img/WGxhDrmf97RNzjP.jpg",
    "revision": "a46b80dff1d21db9ecce78a46b607695"
  },
  {
    "url": "assets/img/五茶.jpg",
    "revision": "99c3a8349fae7f49857cc3204eef8dbb"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/js/1.a26acc85.js",
    "revision": "0af3e0d5642b28e1d3bd58cd7e945bbf"
  },
  {
    "url": "assets/js/2.f5cc1a51.js",
    "revision": "234c122361513720cc4a436a2fcc41f0"
  },
  {
    "url": "assets/js/39.bd582f59.js",
    "revision": "7433bbdc60fbc9ee3f9633843bf649d5"
  },
  {
    "url": "assets/js/4.9fe59e3d.js",
    "revision": "19ef3f73464d80ea97673e572f8082fd"
  },
  {
    "url": "assets/js/40.3ca916da.js",
    "revision": "a3d60a8dd9166896909acd5a38a86b89"
  },
  {
    "url": "assets/js/41.5b2996d0.js",
    "revision": "c2675e66fd5f73594024256cadb7735e"
  },
  {
    "url": "assets/js/42.e9f274c0.js",
    "revision": "18031313ee6bf739e24f97811bcfc18c"
  },
  {
    "url": "assets/js/43.cdb73440.js",
    "revision": "3cd43ff373ad8085b72e49d82a017a42"
  },
  {
    "url": "assets/js/44.dca33c1f.js",
    "revision": "c3a37bffd2a4504a15145947ab7edfc8"
  },
  {
    "url": "assets/js/45.d6b7fa8b.js",
    "revision": "8a909f88aed80ddb01010efc4d09cc68"
  },
  {
    "url": "assets/js/46.b1c4a407.js",
    "revision": "d47876cb61e0ef340c178b465e407b2b"
  },
  {
    "url": "assets/js/47.46b6c753.js",
    "revision": "2f08c805f5d4cedf6ffbf2504b449c44"
  },
  {
    "url": "assets/js/48.18758223.js",
    "revision": "4373276bb62cc065f2c5108f9a5bf946"
  },
  {
    "url": "assets/js/49.71cedd49.js",
    "revision": "f367bb8a0b3ac7ff8c0b3cdd59502db5"
  },
  {
    "url": "assets/js/50.55bceecb.js",
    "revision": "f5b429c3e6ca0efdde17dba7ac25f9ab"
  },
  {
    "url": "assets/js/51.950de0b6.js",
    "revision": "50dcdc0e5b0f66fcb674a0f4e22da840"
  },
  {
    "url": "assets/js/52.5bcb0706.js",
    "revision": "fe65621f5976f258072baf4cbd24ccad"
  },
  {
    "url": "assets/js/53.89e5117d.js",
    "revision": "cf08aabf236676cc53d8058dbc0fe396"
  },
  {
    "url": "assets/js/54.fbb6cb47.js",
    "revision": "0f6a33d5ad31a455c1edbe1b06ea53c3"
  },
  {
    "url": "assets/js/app.6fe03fea.js",
    "revision": "ffa6277508dd852a7ab91d92fb4bc33f"
  },
  {
    "url": "assets/js/layout-BlogLayout.710ba91b.js",
    "revision": "f9ae7168e97f84e0798ab18fdc89004d"
  },
  {
    "url": "assets/js/layout-Layout.37a3f2ea.js",
    "revision": "b7eae98983d90f1cfdfd11d38cd21181"
  },
  {
    "url": "assets/js/layout-NotFound.ed7653f8.js",
    "revision": "46c258a5cc69348514b5d37609d46780"
  },
  {
    "url": "assets/js/page-024d2588.69d265f7.js",
    "revision": "01528f52ee44e94d81db5c3f09b084b2"
  },
  {
    "url": "assets/js/page-0577d216.622746dc.js",
    "revision": "a3d087fe8bed4c2fcfd1165df757c613"
  },
  {
    "url": "assets/js/page-1060d900.1da4af75.js",
    "revision": "4a5d9f795171c710cca140899246e6c7"
  },
  {
    "url": "assets/js/page-144cc9af.703eb720.js",
    "revision": "9e46873e0e7156554efa53f0b696b589"
  },
  {
    "url": "assets/js/page-1529d322.a0176a50.js",
    "revision": "f4a02789a1429a3015a72d2e9357700d"
  },
  {
    "url": "assets/js/page-191607df.60053888.js",
    "revision": "1cfea5f3d3a04ec1325c8f6a3d4aed12"
  },
  {
    "url": "assets/js/page-1a4f1c8d.f4f553f7.js",
    "revision": "0188340fb3933a9a3ba052a444bbccec"
  },
  {
    "url": "assets/js/page-2365fec5.6fb400bd.js",
    "revision": "7e7fca0388176ffd54820323132780e6"
  },
  {
    "url": "assets/js/page-33bb370a.443a31d8.js",
    "revision": "38a1102e5cfdc397fdc58627dc9ffe92"
  },
  {
    "url": "assets/js/page-3ca0adb9.1e0d1982.js",
    "revision": "e13a30d05eaa197c379233980b924c0a"
  },
  {
    "url": "assets/js/page-3df03909.cea4274f.js",
    "revision": "d1caba761f720fcb0952cb9771dfc215"
  },
  {
    "url": "assets/js/page-3fbe065f.225275b2.js",
    "revision": "db6dc41c857b51a72045344a196cf5b3"
  },
  {
    "url": "assets/js/page-44a3bb07.980a4980.js",
    "revision": "9b6e340d163e213a815661dcdb554484"
  },
  {
    "url": "assets/js/page-44be7669.f3340c11.js",
    "revision": "a8a5cd10fc35dceea794b3dcca89daf1"
  },
  {
    "url": "assets/js/page-4657340f.55b9f2d2.js",
    "revision": "4d310ea1172e04d926f432a29540193c"
  },
  {
    "url": "assets/js/page-4c1c756a.d9800622.js",
    "revision": "5d118b11502ff13e41c14c7922cbffd0"
  },
  {
    "url": "assets/js/page-7edc4636.f57e0d0d.js",
    "revision": "0403a9822cbdc2f6c21f515d96c59c9c"
  },
  {
    "url": "assets/js/page-821642f2.3ccc1a4d.js",
    "revision": "f10a7a23786ebed0fc3dbb2817f6a11c"
  },
  {
    "url": "assets/js/page-84892b5a.8ae8def5.js",
    "revision": "6041ddc681c2b381cbadcad06c1d4257"
  },
  {
    "url": "assets/js/page-8c279030.0f679d34.js",
    "revision": "4ede503eea564b1660e24d7f8af4a7ce"
  },
  {
    "url": "assets/js/page-979841b4.28b8ae95.js",
    "revision": "0ffa92883a143212abe268096137dca3"
  },
  {
    "url": "assets/js/page-9cf3858e.7ce47ba3.js",
    "revision": "24aa9fef3fbcb13257438c50623bd334"
  },
  {
    "url": "assets/js/page-a8e0d4ca.3727d717.js",
    "revision": "b10502076f229922871e112758257f01"
  },
  {
    "url": "assets/js/page-bdc1a630.1a890c5b.js",
    "revision": "0712b292a7c46e27996693ea61d0bfed"
  },
  {
    "url": "assets/js/page-c2aab718.32b6043f.js",
    "revision": "f8005d2442acb1f1a49fedbbeed2d293"
  },
  {
    "url": "assets/js/page-cc47165c.cc9201d4.js",
    "revision": "6e4763998df54cbdf74c8dcfabaa7ff0"
  },
  {
    "url": "assets/js/page-d7d99876.cc9a3967.js",
    "revision": "d83c0b2f7343192607f3b2408081cc85"
  },
  {
    "url": "assets/js/page-e3367b2c.ab592cf9.js",
    "revision": "3a859b39df6508be08046d96783df9be"
  },
  {
    "url": "assets/js/vendors~docsearch.723e0e07.js",
    "revision": "433918dd0119b6c06ddf5498a7fc54e6"
  },
  {
    "url": "assets/js/vendors~layout-BlogLayout~layout-Layout.1057d3a6.js",
    "revision": "2a917ec7a76e0782fbe616bc9e042e64"
  },
  {
    "url": "assets/js/vuejs-paginate.1eb4edcc.js",
    "revision": "1859bb4cd8bed83b4954fc67fe80b3b0"
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
    "url": "assets/svg/构建.svg",
    "revision": "f07fada1a59245263a38e9a39ed329b4"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "blog/index.html",
    "revision": "dcc9f5718b804dd51e21426d80914c06"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "fee39628029e9f078a56b9f0f1280ee8"
  },
  {
    "url": "blog/post/ar眼镜/index.html",
    "revision": "2d42a5c5c967a4eb7544e20b6692955f"
  },
  {
    "url": "blog/post/js学习笔记/index.html",
    "revision": "745d25bb1504018050aa08eb2174bf15"
  },
  {
    "url": "blog/post/js错题本/index.html",
    "revision": "f716cf3397d6f9d30b8909fef56cd70e"
  },
  {
    "url": "blog/post/resume/index.html",
    "revision": "d955c06025363c8fc586dd2a7456d69e"
  },
  {
    "url": "blog/post/vscode源码研读/index.html",
    "revision": "102f58b46a1a08f728ee5e5db0813b29"
  },
  {
    "url": "blog/post/乐理基础/index.html",
    "revision": "be968f421f781ee407a34871794b268d"
  },
  {
    "url": "blog/post/人工智能的发展揭示了人类学习的原理/index.html",
    "revision": "087d1161ea45927a044c6b3f08d7c056"
  },
  {
    "url": "blog/post/依赖注入/index.html",
    "revision": "4367f03b7f677d20309d478e28bd214f"
  },
  {
    "url": "blog/post/和声法则/index.html",
    "revision": "6c3dc1ec6b6311cf723e6477952c8e27"
  },
  {
    "url": "blog/post/常用node库记录/index.html",
    "revision": "e6119c589d7f43c33b035275620bc6b4"
  },
  {
    "url": "blog/post/教程来源/index.html",
    "revision": "799ce8dde6a09db04a32337745171b6b"
  },
  {
    "url": "blog/post/本网站构建流程/index.html",
    "revision": "8bb58e6761a6a889aaa78f26e5beb9ef"
  },
  {
    "url": "blog/post/汇统花园议事规则/index.html",
    "revision": "587464682f30d784448a9d3d4cecf9b1"
  },
  {
    "url": "blog/post/流行和声理论/index.html",
    "revision": "60222f331622db2231b2d9928e447ca1"
  },
  {
    "url": "blog/post/爵士理论/index.html",
    "revision": "9fa79b4680ba2c7dafb5e472924c9905"
  },
  {
    "url": "blog/post/获取b站表情/index.html",
    "revision": "de8b9318bc81d3a105a2c0006bdc7233"
  },
  {
    "url": "blog/post/调式解析/index.html",
    "revision": "570d82c27e706c61a74d4eee5b241af9"
  },
  {
    "url": "blog/post/重构网站/index.html",
    "revision": "cb49ec6559eb6546306d79dbc484d4b1"
  },
  {
    "url": "blog/tag/bug/index.html",
    "revision": "3a7ad865e049ca6385f7c793f6a05965"
  },
  {
    "url": "blog/tag/electron/index.html",
    "revision": "87b537bf783863a94a40078326a55cbc"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "1b09cca5322c3b259ac264ccd9c85c1f"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "58ec1bdd4050148805a01c63c5be2d17"
  },
  {
    "url": "blog/tag/nodejs/index.html",
    "revision": "8ea1f2c999ba9ae451e6d47d48945e33"
  },
  {
    "url": "blog/tag/个人/index.html",
    "revision": "128edb55bd2968ad0fbf0a86255d0b61"
  },
  {
    "url": "blog/tag/前端/index.html",
    "revision": "1b0331a51e07806491d015efc2bb1983"
  },
  {
    "url": "blog/tag/演讲/index.html",
    "revision": "a3b8f8a75e18961ebe575267b887d80e"
  },
  {
    "url": "blog/tag/笔记/index.html",
    "revision": "d23fd411537fecc6d2ff17254061b27c"
  },
  {
    "url": "blog/tag/编曲/index.html",
    "revision": "8d5e714923b492d7189af0580e628066"
  },
  {
    "url": "blog/tag/设计模式/index.html",
    "revision": "ef59871abd49a436f5143c6d962f4ffb"
  },
  {
    "url": "blog/tag/音乐/index.html",
    "revision": "451192ced0d6a6f609f483572af5ae0b"
  },
  {
    "url": "doc/index.html",
    "revision": "3d73467288da00eb07c562df6350418e"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "b58b8ea7dc9d328aec55cf240ba1dd5c"
  },
  {
    "url": "guide/index.html",
    "revision": "55e89712711c892d419b2a42080e3420"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4c086be7cb6da17370d424fecc81b9f4"
  },
  {
    "url": "index.html",
    "revision": "a2ea641f3791b0095885b843b74f6b2e"
  },
  {
    "url": "js/jquery-3.5.1.min.js",
    "revision": "dc5e7f18c8d36ac1d3d4753a87c98d0a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "87f06fef7203faa7f3d282fbb181d7c1"
  },
  {
    "url": "py-list/index.html",
    "revision": "a32f8247ad7c734dd1b75cd86a1e72fd"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "92da3645f30136e2acb31223b5d313fb"
  },
  {
    "url": "resume/index.html",
    "revision": "a9d1910b465e7bab853c23f3b67f2868"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "cc6bd134c83ed93255f9c2ba9927c992"
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
