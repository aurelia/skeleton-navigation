### 1.0.0-beta.1.0.5 (2016-01-08)


#### Bug Fixes

* **build:** add build tasks back in ([46b8c482](http://github.com/aurelia/skeleton-navigation/commit/46b8c482b482d60cf817647fde2aed77a4c6ab5d))
* **bundling:** update bundle config ([c524ed06](http://github.com/aurelia/skeleton-navigation/commit/c524ed069002850c16602d7643110ebd0ef249a1))


#### Features

* **asp.net5:** add asp.net5 skeleton ([30221c68](http://github.com/aurelia/skeleton-navigation/commit/30221c680b64db90b0112404c38ddeb3ae09e57c))
* **build:**
  * improve update own deps to work with deeper forder structure ([484c2d4d](http://github.com/aurelia/skeleton-navigation/commit/484c2d4d597fc8beb323f25b186ab3cd1fcc3b56))
  * add pull-dev-env task ([48eaf16b](http://github.com/aurelia/skeleton-navigation/commit/48eaf16bd31a2021c0971112a90b2f0786039b2b))


### 1.0.0-beta.1.0.4 (2015-12-22)

* update dependencies

### 1.0.0-beta.1.0.3 (2015-12-16)


#### Bug Fixes

* **build:** remove the faulty doc task ([e5119bf4](http://github.com/aurelia/skeleton-navigation/commit/e5119bf4f772033a73dfbd34a9a426a15e358fd3))
* **main:** add notes on swap order ([c051b2cb](http://github.com/aurelia/skeleton-navigation/commit/c051b2cb93f2e8d24b4c224af40f56cba6949955))


## 1.0.0-beta.1.0.2 (2015-12-03)


#### Bug Fixes

* **build:** do not reload after CSS injection ([00bab07a](http://github.com/aurelia/skeleton-navigation/commit/00bab07a8256556e96886ad586b14ae73990512b))


#### Features

* **build:** add CSS injecting ([fb620e72](http://github.com/aurelia/skeleton-navigation/commit/fb620e72e5dd532f7a0d7133c3c35e64be0d5b5f))


## 1.0.0-beta.1.0.1 (2015-11-17)


#### Features

* **notify:** notify when build fails ([f8584189](http://github.com/aurelia/skeleton-navigation/commit/f858418944341fab609765eee36e88219486d17c))


### 1.0.0-beta.1 (2015-11-16)


#### Bug Fixes

* **eslintrc:** remove dangling comma ([c05c7894](http://github.com/aurelia/skeleton-navigation/commit/c05c78945e596b6d08c9d186efbcffeef9b18ad2), closes [#205](http://github.com/aurelia/skeleton-navigation/issues/205))


## 0.20.0 (2015-11-10)


#### Bug Fixes

* **bundle:** shoreten the long module name in bundle config ([922c4861](http://github.com/aurelia/skeleton-navigation/commit/922c486112172dbc39a816e1f390ef81adeb9aaf))
* **config.js:** correct babel options ([762c0dcc](http://github.com/aurelia/skeleton-navigation/commit/762c0dccdd21538e8a03d7bb1c4741b73301d511), closes [#189](http://github.com/aurelia/skeleton-navigation/issues/189))
* **package:** declare jspm as a dependency ([53602beb](http://github.com/aurelia/skeleton-navigation/commit/53602beb882056ae921f84af55169a03e75baa03))


## 0.19.0 (2015-10-13)


#### Bug Fixes

* ***:** update dependencies to latest versions ([77986163](http://github.com/aurelia/skeleton-navigation/commit/779861632b7e48152ce7bed9d0316e90fda2482d))
* **all:**
  * update source to work with jspm beta ([53f5cf1a](http://github.com/aurelia/skeleton-navigation/commit/53f5cf1ad0d07d8a1f1087e17a93ecb8718fca62))
  * update route config to match changes in router ([5f272a41](http://github.com/aurelia/skeleton-navigation/commit/5f272a41e8df271f4b2437472bbc0673cd2ef62d))
  * update to latest router usage ([1bb373f7](http://github.com/aurelia/skeleton-navigation/commit/1bb373f73e224f084ac8b3bc330aeffb5d9bf5f0))
  * update to latest framework versions ([86378200](http://github.com/aurelia/skeleton-navigation/commit/8637820009f7bf4f4b2a08b2abaf2fae9bb2811d))
  * update dependencies and links to latest ([8863e7b7](http://github.com/aurelia/skeleton-navigation/commit/8863e7b7d07e87430b0f495cd25923e401698bc9))
  * update to latest version of metadata and view import ([2467e6c8](http://github.com/aurelia/skeleton-navigation/commit/2467e6c8361fc848b45ab6d92b180edf4d4bcdb5))
* **anim:** Remove welcome class animation ([a68fc9d4](http://github.com/aurelia/skeleton-navigation/commit/a68fc9d41f866aacccb1cc1b567b18af58141d1b))
* **build:**
  * copy css files over to the dist folder ([e640fc29](http://github.com/aurelia/skeleton-navigation/commit/e640fc29f591115dc5cc086cd22259b5b018e858))
  * copy css files over to the dist folder ([a64608ea](http://github.com/aurelia/skeleton-navigation/commit/a64608ea64ddf8c3a13ec91395793cfaf7444398))
  * include source in source maps. resolve #111 ([e6accba4](http://github.com/aurelia/skeleton-navigation/commit/e6accba4a533100f56a7040ff4010390bd9f0bad))
  * use relative path for source maps. resolve  #66 ([aaf3cc9a](http://github.com/aurelia/skeleton-navigation/commit/aaf3cc9a67f86275a94666ab328f2ca74a7f7c52))
  * include root attribute on path for source maps ([e3fc2d5a](http://github.com/aurelia/skeleton-navigation/commit/e3fc2d5a26f354c2afbd2c1e1e45b96fe5d92657), closes [#26](http://github.com/aurelia/skeleton-navigation/issues/26))
  * add source maps; remove sourceFileName from compiler options ([1733c4ad](http://github.com/aurelia/skeleton-navigation/commit/1733c4ad032747ecb868b420a5d6f23e9dab12ae))
  * improve watch functionality ([8496a78d](http://github.com/aurelia/skeleton-navigation/commit/8496a78def478bd2c53217c9e70db1d272a935ea))
* **child-router:** correct class name ([93f9bfc9](http://github.com/aurelia/skeleton-navigation/commit/93f9bfc9076a7e950d667d50c9ac75e9efb3e1f5))
* **config:**
  * correct start path by removing the js extension ([d2149e4e](http://github.com/aurelia/skeleton-navigation/commit/d2149e4e0acf8f3ce3013b6c4ca5f97a88138948))
  * add mappings that reflect the EA deps for pre-release testing ([d7cebc67](http://github.com/aurelia/skeleton-navigation/commit/d7cebc67c0b8af43570993d4ab127d97641962c1))
  * revert path config after tool change ([a1c4524b](http://github.com/aurelia/skeleton-navigation/commit/a1c4524b9f84178b70787da4d8642ed8573a0491))
  * update the jspm config ([9ceaa0c2](http://github.com/aurelia/skeleton-navigation/commit/9ceaa0c2af5374461d183993036984cf048261d8))
* **config.js:** revert original config.js ([6077faf2](http://github.com/aurelia/skeleton-navigation/commit/6077faf23ef8db448be62c1dd535776eec604dd9))
* **css:** fix print styles ([dfcf28a8](http://github.com/aurelia/skeleton-navigation/commit/dfcf28a84e07a7ee62635513d836cfa8b3523a87))
* **e2e:**
  * switch from flickr to users navigation test ([6f4f195a](http://github.com/aurelia/skeleton-navigation/commit/6f4f195a972aa8b31a0a819f3ed31a68163e6d1b))
  * remove iit in dist ([dd644b1f](http://github.com/aurelia/skeleton-navigation/commit/dd644b1f926fca5c0a59cf1a662fb246456aa9ae))
  * remove iit ([340fc90d](http://github.com/aurelia/skeleton-navigation/commit/340fc90d3a558e6a5f1aed83f7d2c1080447bc33))
* **flickr:** remove inline styles ([612e0ea6](http://github.com/aurelia/skeleton-navigation/commit/612e0ea67e4bf13685644ff5055f5e36ffc7ad07))
* **formatting:** fixed formatting ([c8aedc24](http://github.com/aurelia/skeleton-navigation/commit/c8aedc24b93114e673bb423774de69617d2012c2))
* **gulpfile:** bug in browser sync for style content ([342a2612](http://github.com/aurelia/skeleton-navigation/commit/342a26121cf5988d73847ed02d022d13e325d5f2))
* **index:**
  * update font awesome reference ([686b337c](http://github.com/aurelia/skeleton-navigation/commit/686b337c188855bc4fc255872f09528beed20a10))
  * add the viewport meta tag to ensure proper rendering and touch zooming ([0ecf0b9e](http://github.com/aurelia/skeleton-navigation/commit/0ecf0b9ea97245492bd9224dfb8cc9b940f254d1))
  * properly load bootstrap ([c1735fdb](http://github.com/aurelia/skeleton-navigation/commit/c1735fdbd064e69567b90358dfcc5eff0fdeab37))
  * per systemjs recommendation, remove error binding ([e30cefac](http://github.com/aurelia/skeleton-navigation/commit/e30cefac419f88911a4c18085ffd59d05047e254))
* **karma:**
  * Fixed tests to adhere to new flickr route ([caf4838c](http://github.com/aurelia/skeleton-navigation/commit/caf4838cb44885826e6eaf7455332581f8ad8cb1))
  * properly set jspm paths for karma ([75584889](http://github.com/aurelia/skeleton-navigation/commit/7558488953b860336a6b4ab3a1c8a2fb7501c122))
* **main:** add notes on html import template loader plugin ([aa9cf940](http://github.com/aurelia/skeleton-navigation/commit/aa9cf940904004e439bab86db0892d5379b0675e))
* **navbar:** automatically collapse the navigation menu on click ([28f3c6fa](http://github.com/aurelia/skeleton-navigation/commit/28f3c6faf1fa3d1533f6470b273bacea7ed76eb7))
* **package:**
  * add text plugin for bundle build ([2918261f](http://github.com/aurelia/skeleton-navigation/commit/2918261f39876bee844eff624360afb7271bb545))
  * point main at a real file ([3ed86d20](http://github.com/aurelia/skeleton-navigation/commit/3ed86d20e862af781ec1761406f8c0aad0c66b83), closes [#157](http://github.com/aurelia/skeleton-navigation/issues/157))
  * remove old framework version ([a2bec337](http://github.com/aurelia/skeleton-navigation/commit/a2bec3373bee7a65f642ba358e178e5cc7270805))
  * reduce debug requests using core-js override ([cede89f6](http://github.com/aurelia/skeleton-navigation/commit/cede89f6768017b238aac0e73e9bf41d9a502220))
  * update deps to latest versions ([4fa8356c](http://github.com/aurelia/skeleton-navigation/commit/4fa8356c689d3be8086ab6063dda7af3cfbdca3f))
  * update dependencies ([dfe57813](http://github.com/aurelia/skeleton-navigation/commit/dfe57813459d012c05affa6c09acb568854c07e3))
  * update dependencies ([3a8cfc33](http://github.com/aurelia/skeleton-navigation/commit/3a8cfc33cb41e29d4199a94b43198cf62a3a1ceb))
  * update dependencies ([42b6ebbd](http://github.com/aurelia/skeleton-navigation/commit/42b6ebbd571f61d82ef7334b518dba4259559f2a))
  * update dependencies ([025154f3](http://github.com/aurelia/skeleton-navigation/commit/025154f3c9fc9d99b6ca00bfd94d9ffc8249df5c))
  * add missing depdency ([c3718827](http://github.com/aurelia/skeleton-navigation/commit/c37188278816f1c540e8b038a8dfed60dfeb0d9c))
  * update dependencies ([0f221d2d](http://github.com/aurelia/skeleton-navigation/commit/0f221d2d8cb79ba40b745c92d0fa64d27bfd0dbf))
  * update dependencies ([d05fb6c9](http://github.com/aurelia/skeleton-navigation/commit/d05fb6c9a4148e85165e8b8594b3de9e344e85d6))
  * update dependencies ([da130f4f](http://github.com/aurelia/skeleton-navigation/commit/da130f4f2919c8330f455e1b9f175d693aacf43c))
  * update dependencies ([ab85bc86](http://github.com/aurelia/skeleton-navigation/commit/ab85bc865cb1607f13cb7d5b3a55f37903e61785))
  * update dependencies ([2957e94d](http://github.com/aurelia/skeleton-navigation/commit/2957e94d84988207c2553395e8e0a1c943a65a16))
  * update Aurelia dependencies ([44083541](http://github.com/aurelia/skeleton-navigation/commit/440835418d78b5d99278ec4f2fbc04beb79ff98f))
  * update dependencies to latest ([c11ffa0d](http://github.com/aurelia/skeleton-navigation/commit/c11ffa0d980c6058dbff6d0a16fadd27040f7214))
  * update dependencies to latest versions ([b5cff606](http://github.com/aurelia/skeleton-navigation/commit/b5cff606059dff0ad47e78cc6ba4325d646015a5))
  * update bootstrapper to latest version ([e1d00037](http://github.com/aurelia/skeleton-navigation/commit/e1d000377c782b1bfc9c8fce0d247afb0b8702d1))
  * update dependencies to latest versions ([275a693d](http://github.com/aurelia/skeleton-navigation/commit/275a693dcbbeec189847f97881b40d25e3b693d4))
  * update dependencies to latest versions ([4f1661dc](http://github.com/aurelia/skeleton-navigation/commit/4f1661dceafe93c8c117133bd07b9edb243b913e))
* **protractor:** fix e2e tests path ([39993071](http://github.com/aurelia/skeleton-navigation/commit/3999307157a188499b10cbb4672c182acff8f94a))
* **readme:** More info about E2E workflow ([f9b360ee](http://github.com/aurelia/skeleton-navigation/commit/f9b360ee3211b896b5b9970520bcd37dc79c2918))
* **styles:**
  * correct some class names ([eeed0111](http://github.com/aurelia/skeleton-navigation/commit/eeed01119b85ea000528eaff89c93d55ca5102e4))
  * change the image animation ([009f4e28](http://github.com/aurelia/skeleton-navigation/commit/009f4e2875cb1c8aea50269577ab28906b6d58bf))
* **test:**
  * fix e2e test broken during fetch-client migration ([182c7a21](http://github.com/aurelia/skeleton-navigation/commit/182c7a21de3b9c6dd637dc339c24b09d28264640))
  * fix broken unit test ([3cbc4a0a](http://github.com/aurelia/skeleton-navigation/commit/3cbc4a0ae5992cb6fc7f8fdf3a353b51d38f6822))
  * workaround for issue with jspm karma plugin ([7bf90b7e](http://github.com/aurelia/skeleton-navigation/commit/7bf90b7ef78b4375760e94c394a8f2ec0870e43e))
  * removing single it execution ([31866dc3](http://github.com/aurelia/skeleton-navigation/commit/31866dc3038fe2c1b51531620a13b88c8e3ff766))
* **tests:**
  * Fix unit tests ([8abc7741](http://github.com/aurelia/skeleton-navigation/commit/8abc7741c7b64ad0b54d7ef1f14d93bb5c0599cf))
  * Fix unit tests for new release ([89b75782](http://github.com/aurelia/skeleton-navigation/commit/89b75782eb1a28771475c49b29be157e4eda8e63))
  * Update routes in unit tests ([fb2c02b6](http://github.com/aurelia/skeleton-navigation/commit/fb2c02b6e3dd5ba219b307bedd5be9b999c21116))
* **users:** move the fetch polyfil load to users so the main.js isn't required ([53a3e2be](http://github.com/aurelia/skeleton-navigation/commit/53a3e2be259a68dad77d1e7976abd5efaaf82869))
* **welcome:**
  * rename the welcome method to submit ([5e4894f3](http://github.com/aurelia/skeleton-navigation/commit/5e4894f354306f1da0e525a214a6edb3563aecba))
  * typo in the last name label ([05e72aaa](http://github.com/aurelia/skeleton-navigation/commit/05e72aaaee2a8c58943f7b9e85eb59307a85f35d))


#### Features

* **all:**
  * new simple html elements, css resources and text-based views ([b3e762c7](http://github.com/aurelia/skeleton-navigation/commit/b3e762c7c8bd694fdb627976cdd19091c0e5774a))
  * switch over to github users in place of flickr ([6fd31066](http://github.com/aurelia/skeleton-navigation/commit/6fd310664a4056f6984915b35ba245c0cf3c0b82))
  * new decorators and behavior model implemented ([e5445795](http://github.com/aurelia/skeleton-navigation/commit/e54457951a17b3f29d47555a299f9aaa06e59349))
  * update to new fluent metadata ([18382913](http://github.com/aurelia/skeleton-navigation/commit/183829132bce3f754377bf2d720a288b71ef4b64))
* **anim:**
  * adds staggering animations ([5324e133](http://github.com/aurelia/skeleton-navigation/commit/5324e133e8ccfc64655d8362b8830ce32a56470d))
  * Add animation example ([675d15a1](http://github.com/aurelia/skeleton-navigation/commit/675d15a153c399f524070e7cb468caae3230febe))
* **build:**
  * update watch task to include style files ([ddf6c789](http://github.com/aurelia/skeleton-navigation/commit/ddf6c789c84ac267bdf4865f19a3339d7ee66253))
  * update compiler and switch to register module format ([921d6ab8](http://github.com/aurelia/skeleton-navigation/commit/921d6ab8a523fce6a410f7333650eef9dc5e8abc))
  * add browser sync ([fe2d2fa7](http://github.com/aurelia/skeleton-navigation/commit/fe2d2fa7c10a4748cab6c86e326465e6a8327ef4))
* **bundle:**
  * configure gulp task with aurelia-bundler. ([8f815c63](http://github.com/aurelia/skeleton-navigation/commit/8f815c638465eabdb565fe7314a86e49d3103c11))
  * add gulp bundle task with aurelia-bundler ([8869cc96](http://github.com/aurelia/skeleton-navigation/commit/8869cc96c7867b624b5c60fdaaea5ecc63465990))
* **bundle config:** package path ([69d36cee](http://github.com/aurelia/skeleton-navigation/commit/69d36cee3b90be4746c5a1edf92ce32119278bea))
* **bundling:** add bundle configuration with aurelia-cli ([77d52d0a](http://github.com/aurelia/skeleton-navigation/commit/77d52d0a97d3a1a25190f82fe7f465ddf68ffd26))
* **e2e:**
  * add protractor plugin, add waitMethods ([d24c5a0d](http://github.com/aurelia/skeleton-navigation/commit/d24c5a0d606c6da1c30cf54a56ca5d3e086749cb))
  * add protractor locator and e2e PO test ([2509836e](http://github.com/aurelia/skeleton-navigation/commit/2509836e8406745e55c8d3d897f8a2b7f1bb1c56))
* **flickr:** move canDeactivate prompt into Welcome ([834b83a8](http://github.com/aurelia/skeleton-navigation/commit/834b83a85f2e36d978482b0ce8c61f45f68841bc))
* **gulpfile:** adds protractor configuration and gulpfile tasks for E2E-Testing ([821f4868](http://github.com/aurelia/skeleton-navigation/commit/821f4868a5d4b4ba62cc12cece943cd55ed3142f))
* **index:** add splash screen ([88e3e6f9](http://github.com/aurelia/skeleton-navigation/commit/88e3e6f956575c18fb37e72cd51e7bfac33f6941))
* **package:** update dependencies ([86b1dd90](http://github.com/aurelia/skeleton-navigation/commit/86b1dd908206abfdca2a8f89cc246f54e761bdbd))
* **routes:** name all routes ([a3cb19ce](http://github.com/aurelia/skeleton-navigation/commit/a3cb19ce63f9a53c58c36244f9cca20ead54fb32))
* **tools:** Added build-dev-env task to skeleton-navigation ([4c145095](http://github.com/aurelia/skeleton-navigation/commit/4c1450956cf1e8804ddd660beeba77546e14287f))
* **welcome:** add sample local value converter ([9a2c2aa6](http://github.com/aurelia/skeleton-navigation/commit/9a2c2aa6f7fa9f5a5666aa0c19163bf49cbcc5fc))


### 0.18.2 (2015-10-13)


#### Bug Fixes

* ***:** update dependencies to latest versions ([77986163](http://github.com/aurelia/skeleton-navigation/commit/779861632b7e48152ce7bed9d0316e90fda2482d))
* **all:**
  * update source to work with jspm beta ([53f5cf1a](http://github.com/aurelia/skeleton-navigation/commit/53f5cf1ad0d07d8a1f1087e17a93ecb8718fca62))
  * update route config to match changes in router ([5f272a41](http://github.com/aurelia/skeleton-navigation/commit/5f272a41e8df271f4b2437472bbc0673cd2ef62d))
  * update to latest router usage ([1bb373f7](http://github.com/aurelia/skeleton-navigation/commit/1bb373f73e224f084ac8b3bc330aeffb5d9bf5f0))
  * update to latest framework versions ([86378200](http://github.com/aurelia/skeleton-navigation/commit/8637820009f7bf4f4b2a08b2abaf2fae9bb2811d))
  * update dependencies and links to latest ([8863e7b7](http://github.com/aurelia/skeleton-navigation/commit/8863e7b7d07e87430b0f495cd25923e401698bc9))
  * update to latest version of metadata and view import ([2467e6c8](http://github.com/aurelia/skeleton-navigation/commit/2467e6c8361fc848b45ab6d92b180edf4d4bcdb5))
* **anim:** Remove welcome class animation ([a68fc9d4](http://github.com/aurelia/skeleton-navigation/commit/a68fc9d41f866aacccb1cc1b567b18af58141d1b))
* **build:**
  * copy css files over to the dist folder ([e640fc29](http://github.com/aurelia/skeleton-navigation/commit/e640fc29f591115dc5cc086cd22259b5b018e858))
  * copy css files over to the dist folder ([a64608ea](http://github.com/aurelia/skeleton-navigation/commit/a64608ea64ddf8c3a13ec91395793cfaf7444398))
  * include source in source maps. resolve #111 ([e6accba4](http://github.com/aurelia/skeleton-navigation/commit/e6accba4a533100f56a7040ff4010390bd9f0bad))
  * use relative path for source maps. resolve  #66 ([aaf3cc9a](http://github.com/aurelia/skeleton-navigation/commit/aaf3cc9a67f86275a94666ab328f2ca74a7f7c52))
  * include root attribute on path for source maps ([e3fc2d5a](http://github.com/aurelia/skeleton-navigation/commit/e3fc2d5a26f354c2afbd2c1e1e45b96fe5d92657), closes [#26](http://github.com/aurelia/skeleton-navigation/issues/26))
  * add source maps; remove sourceFileName from compiler options ([1733c4ad](http://github.com/aurelia/skeleton-navigation/commit/1733c4ad032747ecb868b420a5d6f23e9dab12ae))
  * improve watch functionality ([8496a78d](http://github.com/aurelia/skeleton-navigation/commit/8496a78def478bd2c53217c9e70db1d272a935ea))
* **child-router:** correct class name ([93f9bfc9](http://github.com/aurelia/skeleton-navigation/commit/93f9bfc9076a7e950d667d50c9ac75e9efb3e1f5))
* **config:**
  * correct start path by removing the js extension ([d2149e4e](http://github.com/aurelia/skeleton-navigation/commit/d2149e4e0acf8f3ce3013b6c4ca5f97a88138948))
  * add mappings that reflect the EA deps for pre-release testing ([d7cebc67](http://github.com/aurelia/skeleton-navigation/commit/d7cebc67c0b8af43570993d4ab127d97641962c1))
  * revert path config after tool change ([a1c4524b](http://github.com/aurelia/skeleton-navigation/commit/a1c4524b9f84178b70787da4d8642ed8573a0491))
  * update the jspm config ([9ceaa0c2](http://github.com/aurelia/skeleton-navigation/commit/9ceaa0c2af5374461d183993036984cf048261d8))
* **config.js:** revert original config.js ([6077faf2](http://github.com/aurelia/skeleton-navigation/commit/6077faf23ef8db448be62c1dd535776eec604dd9))
* **css:** fix print styles ([dfcf28a8](http://github.com/aurelia/skeleton-navigation/commit/dfcf28a84e07a7ee62635513d836cfa8b3523a87))
* **e2e:**
  * switch from flickr to users navigation test ([6f4f195a](http://github.com/aurelia/skeleton-navigation/commit/6f4f195a972aa8b31a0a819f3ed31a68163e6d1b))
  * remove iit in dist ([dd644b1f](http://github.com/aurelia/skeleton-navigation/commit/dd644b1f926fca5c0a59cf1a662fb246456aa9ae))
  * remove iit ([340fc90d](http://github.com/aurelia/skeleton-navigation/commit/340fc90d3a558e6a5f1aed83f7d2c1080447bc33))
* **flickr:** remove inline styles ([612e0ea6](http://github.com/aurelia/skeleton-navigation/commit/612e0ea67e4bf13685644ff5055f5e36ffc7ad07))
* **formatting:** fixed formatting ([c8aedc24](http://github.com/aurelia/skeleton-navigation/commit/c8aedc24b93114e673bb423774de69617d2012c2))
* **gulpfile:** bug in browser sync for style content ([342a2612](http://github.com/aurelia/skeleton-navigation/commit/342a26121cf5988d73847ed02d022d13e325d5f2))
* **index:**
  * update font awesome reference ([686b337c](http://github.com/aurelia/skeleton-navigation/commit/686b337c188855bc4fc255872f09528beed20a10))
  * add the viewport meta tag to ensure proper rendering and touch zooming ([0ecf0b9e](http://github.com/aurelia/skeleton-navigation/commit/0ecf0b9ea97245492bd9224dfb8cc9b940f254d1))
  * properly load bootstrap ([c1735fdb](http://github.com/aurelia/skeleton-navigation/commit/c1735fdbd064e69567b90358dfcc5eff0fdeab37))
  * per systemjs recommendation, remove error binding ([e30cefac](http://github.com/aurelia/skeleton-navigation/commit/e30cefac419f88911a4c18085ffd59d05047e254))
* **karma:**
  * Fixed tests to adhere to new flickr route ([caf4838c](http://github.com/aurelia/skeleton-navigation/commit/caf4838cb44885826e6eaf7455332581f8ad8cb1))
  * properly set jspm paths for karma ([75584889](http://github.com/aurelia/skeleton-navigation/commit/7558488953b860336a6b4ab3a1c8a2fb7501c122))
* **main:** add notes on html import template loader plugin ([aa9cf940](http://github.com/aurelia/skeleton-navigation/commit/aa9cf940904004e439bab86db0892d5379b0675e))
* **navbar:** automatically collapse the navigation menu on click ([28f3c6fa](http://github.com/aurelia/skeleton-navigation/commit/28f3c6faf1fa3d1533f6470b273bacea7ed76eb7))
* **package:**
  * add text plugin for bundle build ([2918261f](http://github.com/aurelia/skeleton-navigation/commit/2918261f39876bee844eff624360afb7271bb545))
  * point main at a real file ([3ed86d20](http://github.com/aurelia/skeleton-navigation/commit/3ed86d20e862af781ec1761406f8c0aad0c66b83), closes [#157](http://github.com/aurelia/skeleton-navigation/issues/157))
  * remove old framework version ([a2bec337](http://github.com/aurelia/skeleton-navigation/commit/a2bec3373bee7a65f642ba358e178e5cc7270805))
  * reduce debug requests using core-js override ([cede89f6](http://github.com/aurelia/skeleton-navigation/commit/cede89f6768017b238aac0e73e9bf41d9a502220))
  * update deps to latest versions ([4fa8356c](http://github.com/aurelia/skeleton-navigation/commit/4fa8356c689d3be8086ab6063dda7af3cfbdca3f))
  * update dependencies ([dfe57813](http://github.com/aurelia/skeleton-navigation/commit/dfe57813459d012c05affa6c09acb568854c07e3))
  * update dependencies ([3a8cfc33](http://github.com/aurelia/skeleton-navigation/commit/3a8cfc33cb41e29d4199a94b43198cf62a3a1ceb))
  * update dependencies ([42b6ebbd](http://github.com/aurelia/skeleton-navigation/commit/42b6ebbd571f61d82ef7334b518dba4259559f2a))
  * update dependencies ([025154f3](http://github.com/aurelia/skeleton-navigation/commit/025154f3c9fc9d99b6ca00bfd94d9ffc8249df5c))
  * add missing depdency ([c3718827](http://github.com/aurelia/skeleton-navigation/commit/c37188278816f1c540e8b038a8dfed60dfeb0d9c))
  * update dependencies ([0f221d2d](http://github.com/aurelia/skeleton-navigation/commit/0f221d2d8cb79ba40b745c92d0fa64d27bfd0dbf))
  * update dependencies ([d05fb6c9](http://github.com/aurelia/skeleton-navigation/commit/d05fb6c9a4148e85165e8b8594b3de9e344e85d6))
  * update dependencies ([da130f4f](http://github.com/aurelia/skeleton-navigation/commit/da130f4f2919c8330f455e1b9f175d693aacf43c))
  * update dependencies ([ab85bc86](http://github.com/aurelia/skeleton-navigation/commit/ab85bc865cb1607f13cb7d5b3a55f37903e61785))
  * update dependencies ([2957e94d](http://github.com/aurelia/skeleton-navigation/commit/2957e94d84988207c2553395e8e0a1c943a65a16))
  * update Aurelia dependencies ([44083541](http://github.com/aurelia/skeleton-navigation/commit/440835418d78b5d99278ec4f2fbc04beb79ff98f))
  * update dependencies to latest ([c11ffa0d](http://github.com/aurelia/skeleton-navigation/commit/c11ffa0d980c6058dbff6d0a16fadd27040f7214))
  * update dependencies to latest versions ([b5cff606](http://github.com/aurelia/skeleton-navigation/commit/b5cff606059dff0ad47e78cc6ba4325d646015a5))
  * update bootstrapper to latest version ([e1d00037](http://github.com/aurelia/skeleton-navigation/commit/e1d000377c782b1bfc9c8fce0d247afb0b8702d1))
  * update dependencies to latest versions ([275a693d](http://github.com/aurelia/skeleton-navigation/commit/275a693dcbbeec189847f97881b40d25e3b693d4))
  * update dependencies to latest versions ([4f1661dc](http://github.com/aurelia/skeleton-navigation/commit/4f1661dceafe93c8c117133bd07b9edb243b913e))
* **protractor:** fix e2e tests path ([39993071](http://github.com/aurelia/skeleton-navigation/commit/3999307157a188499b10cbb4672c182acff8f94a))
* **readme:** More info about E2E workflow ([f9b360ee](http://github.com/aurelia/skeleton-navigation/commit/f9b360ee3211b896b5b9970520bcd37dc79c2918))
* **styles:**
  * correct some class names ([eeed0111](http://github.com/aurelia/skeleton-navigation/commit/eeed01119b85ea000528eaff89c93d55ca5102e4))
  * change the image animation ([009f4e28](http://github.com/aurelia/skeleton-navigation/commit/009f4e2875cb1c8aea50269577ab28906b6d58bf))
* **test:**
  * fix e2e test broken during fetch-client migration ([182c7a21](http://github.com/aurelia/skeleton-navigation/commit/182c7a21de3b9c6dd637dc339c24b09d28264640))
  * fix broken unit test ([3cbc4a0a](http://github.com/aurelia/skeleton-navigation/commit/3cbc4a0ae5992cb6fc7f8fdf3a353b51d38f6822))
  * workaround for issue with jspm karma plugin ([7bf90b7e](http://github.com/aurelia/skeleton-navigation/commit/7bf90b7ef78b4375760e94c394a8f2ec0870e43e))
  * removing single it execution ([31866dc3](http://github.com/aurelia/skeleton-navigation/commit/31866dc3038fe2c1b51531620a13b88c8e3ff766))
* **tests:**
  * Fix unit tests ([8abc7741](http://github.com/aurelia/skeleton-navigation/commit/8abc7741c7b64ad0b54d7ef1f14d93bb5c0599cf))
  * Fix unit tests for new release ([89b75782](http://github.com/aurelia/skeleton-navigation/commit/89b75782eb1a28771475c49b29be157e4eda8e63))
  * Update routes in unit tests ([fb2c02b6](http://github.com/aurelia/skeleton-navigation/commit/fb2c02b6e3dd5ba219b307bedd5be9b999c21116))
* **users:** move the fetch polyfil load to users so the main.js isn't required ([53a3e2be](http://github.com/aurelia/skeleton-navigation/commit/53a3e2be259a68dad77d1e7976abd5efaaf82869))
* **welcome:**
  * rename the welcome method to submit ([5e4894f3](http://github.com/aurelia/skeleton-navigation/commit/5e4894f354306f1da0e525a214a6edb3563aecba))
  * typo in the last name label ([05e72aaa](http://github.com/aurelia/skeleton-navigation/commit/05e72aaaee2a8c58943f7b9e85eb59307a85f35d))


#### Features

* **all:**
  * new simple html elements, css resources and text-based views ([b3e762c7](http://github.com/aurelia/skeleton-navigation/commit/b3e762c7c8bd694fdb627976cdd19091c0e5774a))
  * switch over to github users in place of flickr ([6fd31066](http://github.com/aurelia/skeleton-navigation/commit/6fd310664a4056f6984915b35ba245c0cf3c0b82))
  * new decorators and behavior model implemented ([e5445795](http://github.com/aurelia/skeleton-navigation/commit/e54457951a17b3f29d47555a299f9aaa06e59349))
  * update to new fluent metadata ([18382913](http://github.com/aurelia/skeleton-navigation/commit/183829132bce3f754377bf2d720a288b71ef4b64))
* **anim:**
  * adds staggering animations ([5324e133](http://github.com/aurelia/skeleton-navigation/commit/5324e133e8ccfc64655d8362b8830ce32a56470d))
  * Add animation example ([675d15a1](http://github.com/aurelia/skeleton-navigation/commit/675d15a153c399f524070e7cb468caae3230febe))
* **build:**
  * update watch task to include style files ([ddf6c789](http://github.com/aurelia/skeleton-navigation/commit/ddf6c789c84ac267bdf4865f19a3339d7ee66253))
  * update compiler and switch to register module format ([921d6ab8](http://github.com/aurelia/skeleton-navigation/commit/921d6ab8a523fce6a410f7333650eef9dc5e8abc))
  * add browser sync ([fe2d2fa7](http://github.com/aurelia/skeleton-navigation/commit/fe2d2fa7c10a4748cab6c86e326465e6a8327ef4))
* **bundle:**
  * configure gulp task with aurelia-bundler. ([8f815c63](http://github.com/aurelia/skeleton-navigation/commit/8f815c638465eabdb565fe7314a86e49d3103c11))
  * add gulp bundle task with aurelia-bundler ([8869cc96](http://github.com/aurelia/skeleton-navigation/commit/8869cc96c7867b624b5c60fdaaea5ecc63465990))
* **bundle config:** package path ([69d36cee](http://github.com/aurelia/skeleton-navigation/commit/69d36cee3b90be4746c5a1edf92ce32119278bea))
* **bundling:** add bundle configuration with aurelia-cli ([77d52d0a](http://github.com/aurelia/skeleton-navigation/commit/77d52d0a97d3a1a25190f82fe7f465ddf68ffd26))
* **e2e:**
  * add protractor plugin, add waitMethods ([d24c5a0d](http://github.com/aurelia/skeleton-navigation/commit/d24c5a0d606c6da1c30cf54a56ca5d3e086749cb))
  * add protractor locator and e2e PO test ([2509836e](http://github.com/aurelia/skeleton-navigation/commit/2509836e8406745e55c8d3d897f8a2b7f1bb1c56))
* **flickr:** move canDeactivate prompt into Welcome ([834b83a8](http://github.com/aurelia/skeleton-navigation/commit/834b83a85f2e36d978482b0ce8c61f45f68841bc))
* **gulpfile:** adds protractor configuration and gulpfile tasks for E2E-Testing ([821f4868](http://github.com/aurelia/skeleton-navigation/commit/821f4868a5d4b4ba62cc12cece943cd55ed3142f))
* **index:** add splash screen ([88e3e6f9](http://github.com/aurelia/skeleton-navigation/commit/88e3e6f956575c18fb37e72cd51e7bfac33f6941))
* **package:** update dependencies ([86b1dd90](http://github.com/aurelia/skeleton-navigation/commit/86b1dd908206abfdca2a8f89cc246f54e761bdbd))
* **routes:** name all routes ([a3cb19ce](http://github.com/aurelia/skeleton-navigation/commit/a3cb19ce63f9a53c58c36244f9cca20ead54fb32))
* **tools:** Added build-dev-env task to skeleton-navigation ([4c145095](http://github.com/aurelia/skeleton-navigation/commit/4c1450956cf1e8804ddd660beeba77546e14287f))
* **welcome:** add sample local value converter ([9a2c2aa6](http://github.com/aurelia/skeleton-navigation/commit/9a2c2aa6f7fa9f5a5666aa0c19163bf49cbcc5fc))


### 0.18.1 (2015-09-11)


#### Bug Fixes

* **build:**
  * copy css files over to the dist folder ([e640fc29](http://github.com/aurelia/skeleton-navigation/commit/e640fc29f591115dc5cc086cd22259b5b018e858))
  * copy css files over to the dist folder ([a64608ea](http://github.com/aurelia/skeleton-navigation/commit/a64608ea64ddf8c3a13ec91395793cfaf7444398))
* **package:** add text plugin for bundle build ([2918261f](http://github.com/aurelia/skeleton-navigation/commit/2918261f39876bee844eff624360afb7271bb545))


#### Features

* **bundle:**
  * configure gulp task with aurelia-bundler. ([8f815c63](http://github.com/aurelia/skeleton-navigation/commit/8f815c638465eabdb565fe7314a86e49d3103c11))
  * add gulp bundle task with aurelia-bundler ([8869cc96](http://github.com/aurelia/skeleton-navigation/commit/8869cc96c7867b624b5c60fdaaea5ecc63465990))


## 0.18.0 (2015-09-05)


#### Bug Fixes

* **main:** add notes on html import template loader plugin ([aa9cf940](http://github.com/aurelia/skeleton-navigation/commit/aa9cf940904004e439bab86db0892d5379b0675e))
* **package:** point main at a real file ([3ed86d20](http://github.com/aurelia/skeleton-navigation/commit/3ed86d20e862af781ec1761406f8c0aad0c66b83), closes [#157](http://github.com/aurelia/skeleton-navigation/issues/157))
* **test:** fix e2e test broken during fetch-client migration ([182c7a21](http://github.com/aurelia/skeleton-navigation/commit/182c7a21de3b9c6dd637dc339c24b09d28264640))


#### Features

* **all:** new simple html elements, css resources and text-based views ([b3e762c7](http://github.com/aurelia/skeleton-navigation/commit/b3e762c7c8bd694fdb627976cdd19091c0e5774a))


## 0.17.0 (2015-08-14)


#### Bug Fixes

* **config.js:** revert original config.js ([6077faf2](http://github.com/aurelia/skeleton-navigation/commit/6077faf23ef8db448be62c1dd535776eec604dd9))
* **e2e:** switch from flickr to users navigation test ([6f4f195a](http://github.com/aurelia/skeleton-navigation/commit/6f4f195a972aa8b31a0a819f3ed31a68163e6d1b))
* **test:** fix broken unit test ([3cbc4a0a](http://github.com/aurelia/skeleton-navigation/commit/3cbc4a0ae5992cb6fc7f8fdf3a353b51d38f6822))


#### Features

* **bundle config:** package path ([69d36cee](http://github.com/aurelia/skeleton-navigation/commit/69d36cee3b90be4746c5a1edf92ce32119278bea))
* **bundling:** add bundle configuration with aurelia-cli ([77d52d0a](http://github.com/aurelia/skeleton-navigation/commit/77d52d0a97d3a1a25190f82fe7f465ddf68ffd26))


### 0.16.2 (2015-08-05)


#### Bug Fixes

* **package:** remove old framework version ([a2bec337](http://github.com/aurelia/skeleton-navigation/commit/a2bec3373bee7a65f642ba358e178e5cc7270805))


### 0.16.1 (2015-08-05)


#### Bug Fixes

* **config:** correct start path by removing the js extension ([d2149e4e](http://github.com/aurelia/skeleton-navigation/commit/d2149e4e0acf8f3ce3013b6c4ca5f97a88138948))


## 0.16.0 (2015-08-05)


#### Bug Fixes

* **all:** update source to work with jspm beta ([53f5cf1a](http://github.com/aurelia/skeleton-navigation/commit/53f5cf1ad0d07d8a1f1087e17a93ecb8718fca62))
* **css:** fix print styles ([dfcf28a8](http://github.com/aurelia/skeleton-navigation/commit/dfcf28a84e07a7ee62635513d836cfa8b3523a87))
* **index:** update font awesome reference ([686b337c](http://github.com/aurelia/skeleton-navigation/commit/686b337c188855bc4fc255872f09528beed20a10))
* **styles:** correct some class names ([eeed0111](http://github.com/aurelia/skeleton-navigation/commit/eeed01119b85ea000528eaff89c93d55ca5102e4))
* **users:** move the fetch polyfil load to users so the main.js isn't required ([53a3e2be](http://github.com/aurelia/skeleton-navigation/commit/53a3e2be259a68dad77d1e7976abd5efaaf82869))


#### Features

* **all:** switch over to github users in place of flickr ([6fd31066](http://github.com/aurelia/skeleton-navigation/commit/6fd310664a4056f6984915b35ba245c0cf3c0b82))


### 0.15.1 (2015-07-02)


## 0.15.0 (2015-07-02)


#### Bug Fixes

* **build:** include source in source maps. resolve #111 ([e6accba4](http://github.com/aurelia/skeleton-navigation/commit/e6accba4a533100f56a7040ff4010390bd9f0bad))
* **package:** reduce debug requests using core-js override ([cede89f6](http://github.com/aurelia/skeleton-navigation/commit/cede89f6768017b238aac0e73e9bf41d9a502220))
* **tests:** Fix unit tests ([8abc7741](http://github.com/aurelia/skeleton-navigation/commit/8abc7741c7b64ad0b54d7ef1f14d93bb5c0599cf))


#### Features

* **routes:** name all routes ([a3cb19ce](http://github.com/aurelia/skeleton-navigation/commit/a3cb19ce63f9a53c58c36244f9cca20ead54fb32))


## 0.14.0 (2015-06-09)


#### Bug Fixes

* **all:** update route config to match changes in router ([5f272a41](http://github.com/aurelia/skeleton-navigation/commit/5f272a41e8df271f4b2437472bbc0673cd2ef62d))
* **config:**
  * add mappings that reflect the EA deps for pre-release testing ([d7cebc67](http://github.com/aurelia/skeleton-navigation/commit/d7cebc67c0b8af43570993d4ab127d97641962c1))
  * revert path config after tool change ([a1c4524b](http://github.com/aurelia/skeleton-navigation/commit/a1c4524b9f84178b70787da4d8642ed8573a0491))
* **karma:**
  * Fixed tests to adhere to new flickr route ([caf4838c](http://github.com/aurelia/skeleton-navigation/commit/caf4838cb44885826e6eaf7455332581f8ad8cb1))
  * properly set jspm paths for karma ([75584889](http://github.com/aurelia/skeleton-navigation/commit/7558488953b860336a6b4ab3a1c8a2fb7501c122))
* **package:** update deps to latest versions ([4fa8356c](http://github.com/aurelia/skeleton-navigation/commit/4fa8356c689d3be8086ab6063dda7af3cfbdca3f))
* **styles:** change the image animation ([009f4e28](http://github.com/aurelia/skeleton-navigation/commit/009f4e2875cb1c8aea50269577ab28906b6d58bf))
* **tests:** Fix unit tests for new release ([89b75782](http://github.com/aurelia/skeleton-navigation/commit/89b75782eb1a28771475c49b29be157e4eda8e63))
* **welcome:** rename the welcome method to submit ([5e4894f3](http://github.com/aurelia/skeleton-navigation/commit/5e4894f354306f1da0e525a214a6edb3563aecba))


#### Features

* **anim:** adds staggering animations ([5324e133](http://github.com/aurelia/skeleton-navigation/commit/5324e133e8ccfc64655d8362b8830ce32a56470d))
* **flickr:** move canDeactivate prompt into Welcome ([834b83a8](http://github.com/aurelia/skeleton-navigation/commit/834b83a85f2e36d978482b0ce8c61f45f68841bc))


## 0.13.0 (2015-05-01)


#### Bug Fixes

* **all:** update to latest router usage ([1bb373f7](http://github.com/aurelia/skeleton-navigation/commit/1bb373f73e224f084ac8b3bc330aeffb5d9bf5f0))
* **anim:** Remove welcome class animation ([a68fc9d4](http://github.com/aurelia/skeleton-navigation/commit/a68fc9d41f866aacccb1cc1b567b18af58141d1b))
* **build:** use relative path for source maps. resolve  #66 ([aaf3cc9a](http://github.com/aurelia/skeleton-navigation/commit/aaf3cc9a67f86275a94666ab328f2ca74a7f7c52))
* **flickr:** remove inline styles ([612e0ea6](http://github.com/aurelia/skeleton-navigation/commit/612e0ea67e4bf13685644ff5055f5e36ffc7ad07))
* **index:** add the viewport meta tag to ensure proper rendering and touch zooming ([0ecf0b9e](http://github.com/aurelia/skeleton-navigation/commit/0ecf0b9ea97245492bd9224dfb8cc9b940f254d1))
* **navbar:** automatically collapse the navigation menu on click ([28f3c6fa](http://github.com/aurelia/skeleton-navigation/commit/28f3c6faf1fa3d1533f6470b273bacea7ed76eb7))
* **package:** update dependencies ([dfe57813](http://github.com/aurelia/skeleton-navigation/commit/dfe57813459d012c05affa6c09acb568854c07e3))


#### Features

* **anim:** Add animation example ([675d15a1](http://github.com/aurelia/skeleton-navigation/commit/675d15a153c399f524070e7cb468caae3230febe))


## 0.12.0 (2015-04-09)


#### Bug Fixes

* **readme:** More info about E2E workflow ([f9b360ee](http://github.com/aurelia/skeleton-navigation/commit/f9b360ee3211b896b5b9970520bcd37dc79c2918))
* **test:** workaround for issue with jspm karma plugin ([7bf90b7e](http://github.com/aurelia/skeleton-navigation/commit/7bf90b7ef78b4375760e94c394a8f2ec0870e43e))
* **tests:** Update routes in unit tests ([fb2c02b6](http://github.com/aurelia/skeleton-navigation/commit/fb2c02b6e3dd5ba219b307bedd5be9b999c21116))


#### Features

* **all:** new decorators and behavior model implemented ([e5445795](http://github.com/aurelia/skeleton-navigation/commit/e54457951a17b3f29d47555a299f9aaa06e59349))


## 0.11.0 (2015-03-25)


#### Bug Fixes

* **all:** update to latest framework versions ([86378200](http://github.com/aurelia/skeleton-navigation/commit/8637820009f7bf4f4b2a08b2abaf2fae9bb2811d))


### 0.10.2 (2015-02-28)


#### Bug Fixes

* **package:** update dependencies ([3a8cfc33](http://github.com/aurelia/skeleton-navigation/commit/3a8cfc33cb41e29d4199a94b43198cf62a3a1ceb))


### 0.10.1 (2015-02-28)


#### Bug Fixes

* **child-router:** correct class name ([93f9bfc9](http://github.com/aurelia/skeleton-navigation/commit/93f9bfc9076a7e950d667d50c9ac75e9efb3e1f5))
* **e2e:**
  * remove iit in dist ([dd644b1f](http://github.com/aurelia/skeleton-navigation/commit/dd644b1f926fca5c0a59cf1a662fb246456aa9ae))
  * remove iit ([340fc90d](http://github.com/aurelia/skeleton-navigation/commit/340fc90d3a558e6a5f1aed83f7d2c1080447bc33))
* **package:** update dependencies ([42b6ebbd](http://github.com/aurelia/skeleton-navigation/commit/42b6ebbd571f61d82ef7334b518dba4259559f2a))


#### Features

* **e2e:** add protractor plugin, add waitMethods ([d24c5a0d](http://github.com/aurelia/skeleton-navigation/commit/d24c5a0d606c6da1c30cf54a56ca5d3e086749cb))


## 0.10.0 (2015-02-12)


#### Bug Fixes

* **index:** properly load bootstrap ([c1735fdb](http://github.com/aurelia/skeleton-navigation/commit/c1735fdbd064e69567b90358dfcc5eff0fdeab37))


### 0.9.5 (2015-02-06)


#### Bug Fixes

* **build:**
  * include root attribute on path for source maps ([e3fc2d5a](http://github.com/aurelia/skeleton-navigation/commit/e3fc2d5a26f354c2afbd2c1e1e45b96fe5d92657), closes [#26](http://github.com/aurelia/skeleton-navigation/issues/26))
  * add source maps; remove sourceFileName from compiler options ([1733c4ad](http://github.com/aurelia/skeleton-navigation/commit/1733c4ad032747ecb868b420a5d6f23e9dab12ae))
* **package:** update dependencies ([025154f3](http://github.com/aurelia/skeleton-navigation/commit/025154f3c9fc9d99b6ca00bfd94d9ffc8249df5c))
* **test:** removing single it execution ([31866dc3](http://github.com/aurelia/skeleton-navigation/commit/31866dc3038fe2c1b51531620a13b88c8e3ff766))


#### Features

* **e2e:** add protractor locator and e2e PO test ([2509836e](http://github.com/aurelia/skeleton-navigation/commit/2509836e8406745e55c8d3d897f8a2b7f1bb1c56))


### 0.9.4 (2015-02-03)


#### Bug Fixes

* **index:** per systemjs recommendation, remove error binding ([e30cefac](http://github.com/aurelia/skeleton-navigation/commit/e30cefac419f88911a4c18085ffd59d05047e254))
* **package:** add missing depdency ([c3718827](http://github.com/aurelia/skeleton-navigation/commit/c37188278816f1c540e8b038a8dfed60dfeb0d9c))


#### Features

* **gulpfile:** adds protractor configuration and gulpfile tasks for E2E-Testing ([821f4868](http://github.com/aurelia/skeleton-navigation/commit/821f4868a5d4b4ba62cc12cece943cd55ed3142f))
* **tools:** Added build-dev-env task to skeleton-navigation ([4c145095](http://github.com/aurelia/skeleton-navigation/commit/4c1450956cf1e8804ddd660beeba77546e14287f))


### 0.9.3 (2015-01-25)


#### Bug Fixes

* **package:** update dependencies ([0f221d2d](http://github.com/aurelia/skeleton-navigation/commit/0f221d2d8cb79ba40b745c92d0fa64d27bfd0dbf))


### 0.9.2 (2015-01-25)


#### Bug Fixes

* **gulpfile:** bug in browser sync for style content ([342a2612](http://github.com/aurelia/skeleton-navigation/commit/342a26121cf5988d73847ed02d022d13e325d5f2))


### 0.9.1 (2015-01-24)


#### Bug Fixes

* **package:**
  * update dependencies ([d05fb6c9](http://github.com/aurelia/skeleton-navigation/commit/d05fb6c9a4148e85165e8b8594b3de9e344e85d6))
  * update dependencies ([da130f4f](http://github.com/aurelia/skeleton-navigation/commit/da130f4f2919c8330f455e1b9f175d693aacf43c))
  * update dependencies ([ab85bc86](http://github.com/aurelia/skeleton-navigation/commit/ab85bc865cb1607f13cb7d5b3a55f37903e61785))


#### Features

* **package:** update dependencies ([86b1dd90](http://github.com/aurelia/skeleton-navigation/commit/86b1dd908206abfdca2a8f89cc246f54e761bdbd))
* **welcome:** add sample local value converter ([9a2c2aa6](http://github.com/aurelia/skeleton-navigation/commit/9a2c2aa6f7fa9f5a5666aa0c19163bf49cbcc5fc))


## 0.9.0 (2015-01-22)


#### Bug Fixes

* **all:**
  * update dependencies and links to latest ([8863e7b7](http://github.com/aurelia/skeleton-navigation/commit/8863e7b7d07e87430b0f495cd25923e401698bc9))
  * update to latest version of metadata and view import ([2467e6c8](http://github.com/aurelia/skeleton-navigation/commit/2467e6c8361fc848b45ab6d92b180edf4d4bcdb5))
* **build:** improve watch functionality ([8496a78d](http://github.com/aurelia/skeleton-navigation/commit/8496a78def478bd2c53217c9e70db1d272a935ea))
* **package:** update dependencies ([2957e94d](http://github.com/aurelia/skeleton-navigation/commit/2957e94d84988207c2553395e8e0a1c943a65a16))


#### Features

* **all:** update to new fluent metadata ([18382913](http://github.com/aurelia/skeleton-navigation/commit/183829132bce3f754377bf2d720a288b71ef4b64))
* **index:** add splash screen ([88e3e6f9](http://github.com/aurelia/skeleton-navigation/commit/88e3e6f956575c18fb37e72cd51e7bfac33f6941))


## 0.8.0 (2015-01-12)


#### Bug Fixes

* **package:** update Aurelia dependencies ([44083541](http://github.com/aurelia/skeleton-navigation/commit/440835418d78b5d99278ec4f2fbc04beb79ff98f))


#### Features

* **build:** update watch task to include style files ([ddf6c789](http://github.com/aurelia/skeleton-navigation/commit/ddf6c789c84ac267bdf4865f19a3339d7ee66253))


### 0.7.2 (2015-01-07)


#### Bug Fixes

* **welcome:** typo in the last name label ([05e72aaa](http://github.com/aurelia/skeleton-navigation/commit/05e72aaaee2a8c58943f7b9e85eb59307a85f35d))


### 0.7.1 (2015-01-07)

* updates to the readme to help clarify issues around authentication and usage on windows

## 0.7.0 (2015-01-07)


#### Bug Fixes

* **package:** update dependencies to latest ([c11ffa0d](http://github.com/aurelia/skeleton-navigation/commit/c11ffa0d980c6058dbff6d0a16fadd27040f7214))


## 0.6.0 (2015-01-06)


#### Features

* **build:** update compiler and switch to register module format ([921d6ab8](http://github.com/aurelia/skeleton-navigation/commit/921d6ab8a523fce6a410f7333650eef9dc5e8abc))


## 0.5.0 (2014-12-22)


#### Bug Fixes

* **config:** update the jspm config ([9ceaa0c2](http://github.com/aurelia/skeleton-navigation/commit/9ceaa0c2af5374461d183993036984cf048261d8))
* **package:** update dependencies to latest versions ([b5cff606](http://github.com/aurelia/skeleton-navigation/commit/b5cff606059dff0ad47e78cc6ba4325d646015a5))


#### Features

* **build:** add browser sync ([fe2d2fa7](http://github.com/aurelia/skeleton-navigation/commit/fe2d2fa7c10a4748cab6c86e326465e6a8327ef4))


### 0.4.2 (2014-12-18)


#### Bug Fixes

* **package:** update bootstrapper to latest version ([e1d00037](http://github.com/aurelia/skeleton-navigation/commit/e1d000377c782b1bfc9c8fce0d247afb0b8702d1))


### 0.4.1 (2014-12-18)


#### Bug Fixes

* **package:** update dependencies to latest versions ([275a693d](http://github.com/aurelia/skeleton-navigation/commit/275a693dcbbeec189847f97881b40d25e3b693d4))


## 0.4.0 (2014-12-17)


#### Bug Fixes

* **package:** update dependencies to latest versions ([77986163](http://github.com/aurelia/skeleton-navigation/commit/779861632b7e48152ce7bed9d0316e90fda2482d))
* **package:** update dependencies to latest versions ([4f1661dc](http://github.com/aurelia/skeleton-navigation/commit/4f1661dceafe93c8c117133bd07b9edb243b913e))
