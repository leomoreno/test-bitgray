!function(){"use strict";angular.module("testBitgray",["ngAnimate","ngCookies","ngSanitize","ngResource","ui.router","ngMaterial"])}(),function(){"use strict";function t(t,a,e){function o(){return p=a.defer(),i(),p.promise}function n(t){t||(t=5);for(var a=[],e=null;a.length<t;)e=s(),-1===a.indexOf(e)&&a.push(e);return a}function l(){p.resolve(s())}function s(){var t=g[Math.floor(Math.random()*g.length)];return t}function i(){function t(t){g=t.data,d()}if(null===g)e.get(y+"users").then(t)["catch"](u);else{var a=g[Math.floor(Math.random()*g.length)];p.resolve(a)}}function d(){function t(t){b=t.data,angular.forEach(b,function(t){angular.forEach(g,function(a){a.id===t.userId&&(a.albums||(a.albums=[]),a.albums.push(t))})}),m()}return e.get(y+"albums").then(t)["catch"](u)}function m(){function t(t){f=t.data,angular.forEach(f,function(t){angular.forEach(b,function(a){t.albumId===a.id&&(a.photos||(a.photos=[]),a.photos.push(t))})}),r()}return e.get(y+"photos").then(t)["catch"](u)}function r(){function t(t){h=t.data,angular.forEach(h,function(t){angular.forEach(g,function(a){a.id===t.userId&&(a.posts||(a.posts=[]),a.posts.push(t))})}),c()}return e.get(y+"posts").then(t)["catch"](u)}function c(){function t(t){v=t.data,angular.forEach(v,function(t){angular.forEach(h,function(a){a.id===t.postId&&(a.comments||(a.comments=[]),a.comments.push(t))})}),l()}return e.get(y+"comments").then(t)["catch"](u)}function u(a){t.error("XHR Failed.\n"+angular.toJson(a.data,!0)),p.reject(a)}var p=null,g=null,b=null,f=null,h=null,v=null,y="http://jsonplaceholder.typicode.com/",x={getRandomUser:o,getRandomUsers:n,getAlbums:d,getPhotos:m,getPosts:r};return x}t.$inject=["$log","$q","$http"],angular.module("testBitgray").factory("userApi",t)}(),function(){"use strict";function t(){function t(){}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return a}angular.module("testBitgray").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function a(a,e,o,n){var l,s=t(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(t){s.type(t).pause()["delete"]()}),l=a.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){s.type(t.login).pause()["delete"]()})}),a.$on("$destroy",function(){l()})}function e(){}var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:e,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("testBitgray").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,a,e,o,n,l){function s(){p.loading=!0;var t=p.user?3e3:100;l(function(){e.getRandomUser().then(function(t){p.user=t,p.user.friends=e.getRandomUsers(),p.loading=!1})},t)}function i(t){p.album=t,p.selectedIndex=1}function d(){p.album=null,p.selectedIndex=0}function m(t){p.post=t,p.selectedPostIndex=1}function r(){p.post=null,p.selectedPostIndex=0}function c(a,e){var l=(n("sm")||n("xs"))&&t.customFullscreen;o.show({controller:function(){this.photo=e,this.closeDialog=u},controllerAs:"me",templateUrl:"app/me/dialog.tmpl.html",parent:angular.element(document.body),targetEvent:a,clickOutsideToClose:!0,fullscreen:l}).then(function(a){t.status='You said the information was "'+a+'".'},function(){t.status="You cancelled the dialog."}),t.$watch(function(){return n("xs")||n("sm")},function(a){t.customFullscreen=a===!0})}function u(){o.cancel()}var p=this;p.activate=s,p.selectAlbum=i,p.unselectAlbum=d,p.selectPost=m,p.unselectPost=r,p.showDialog=c,p.closeDialog=u,p.loading=!1,p.album=null,p.post=null,p.photo=null,p.friends=[],s()}t.$inject=["$scope","toastr","userApi","$mdDialog","$mdMedia","$timeout"],angular.module("testBitgray").controller("MeController",t)}(),function(){"use strict";function t(){}angular.module("testBitgray").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("testBitgray").run(t)}(),function(){"use strict";function t(t,a,e){t.state("index",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("me",{url:"/me",templateUrl:"app/me/me.html",controller:"MeController",controllerAs:"me"}),e.html5Mode(!0)}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("testBitgray").config(t)}(),function(){"use strict";angular.module("testBitgray").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,a,e){a.theme("default").primaryPalette("blue").accentPalette("light-blue"),a.theme("docs-dark","default").primaryPalette("yellow").dark(),t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}t.$inject=["$logProvider","$mdThemingProvider","toastr"],angular.module("testBitgray").config(t)}(),angular.module("testBitgray").run(["$templateCache",function(t){t.put("app/main/main.html",'<div layout="row" layout-fill="" layout-align="center end" class="main"><md-whiteframe class="md-whiteframe-12dp md-padding" flex-sm="65" flex-gt-sm="45" flex-gt-md="35"><h1 class="md-display-1">Frontend test!</h1><md-button class="md-warn md-raised animated infinite" ng-class="main.classAnimation" ui-sref="me">Ver perfil</md-button><p>Esta una app demo para Bitgray, genera un perfil de usuario a partir de los datos tomados de <a href="http://jsonplaceholder.typicode.com" target="_blank">http://jsonplaceholder.typicode.com</a></p><p class="hide-xs">Algunas de las tecnologías utilizadas en esta app son:<br><acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'AngularJs\', \'Material Design\', \'Jasmine\', \'node-sass\', \'JShint\', \'Karma\',\'Node\',\'npm\']">.</acme-malarkey></p>Visita el repo en <a href="https://github.com/leomoreno/test-bitgray" target="_blank">Github</a></md-whiteframe></div>'),t.put("app/me/dialog.tmpl.html",'<md-dialog aria-label="Foto" ng-cloak="" flex-xs="80"><md-toolbar><div class="md-toolbar-tools"><h2>Foto</h2><span flex=""></span><md-button class="md-icon-button" ng-click="me.closeDialog()"><md-icon class="material-icons" aria-label="Close dialog">clear</md-icon></md-button></div></md-toolbar><md-dialog-content><div class="md-dialog-content"><img style="margin: auto; max-width: 100%;" alt="{{me.photo.title}}" ng-src="{{me.photo.url}}"></div></md-dialog-content></md-dialog>'),t.put("app/me/me.html",'<md-content flex="100" ng-cloak=""><section class="jumbotron profile"><div ng-show="me.loading" class="animated-show-hide loading-bar"><p class="lead center">Cargando datos</p><md-progress-linear md-mode="indeterminate"></md-progress-linear></div><div ng-show="!me.loading" class="animated-show-hide"><img ng-src="http://loremflickr.com/320/320/dog?random={{me.user.id}}" alt="User" class="avatar"><h3>{{me.user.name}}<br><small><md-icon class="material-icons">link</md-icon>{{me.user.website}}</small></h3><div layout=""><span flex=""></span><md-button class="md-icon-button"><md-icon class="material-icons" ng-click="me.activate();">replay</md-icon></md-button></div></div></section></md-content><div ng-cloak="" ng-show="!me.loading" class="animated-show-hide"><md-content class="profile-tabs"><md-tabs md-dynamic-height=""><md-tab label="Perfil"><div ng-include="" src="\'app/me/profile.html\'"></div></md-tab><md-tab label="Fotos"><div ng-include="" src="\'app/me/photo.html\'"></div></md-tab><md-tab label="Posts"><div ng-include="" src="\'app/me/post.html\'"></div></md-tab></md-tabs></md-content></div>'),t.put("app/me/photo.html",'<md-content class="md-padding tabs-content" layout="row" layout-align="center start"><div layout-sm="column" layout="row" flex="95" layout-padding=""><md-tabs md-selected="me.selectedIndex" class="panel-tabs" flex=""><md-tab><md-tab-label>Albumes</md-tab-label><md-tab-body><div flex="" layout="row" layout-align="left start" layout-wrap=""><div ng-repeat="album in me.user.albums" flex-gt-sm="25" flex-xs="100" flex="50"><md-card ng-click="me.selectAlbum(album);"><md-toolbar class="md-hue-3 md-accent"><div class="md-toolbar-tools"><h2><span>{{ album.title | limitTo:15 }}</span></h2><span flex=""></span></div></md-toolbar><img ng-src="{{album.photos[0].thumbnailUrl}}" class="md-card-image" alt="{{album.title}}"></md-card></div></div></md-tab-body></md-tab><md-tab><md-tab-label>Photos</md-tab-label><md-tab-body><div layout="column" align="left"><md-toolbar class="md-accent md-hue-1"><div class="md-toolbar-tools"><md-button class="md-icon-button" ng-click="me.unselectAlbum();"><md-icon class="material-icons">arrow_back</md-icon></md-button><h2 class="md-title hide-xs">{{me.album.title}}</h2><span flex=""></span><md-button class="md-icon-button" aria-label="Favorite"><md-icon class="material-icons">favorite</md-icon></md-button></div></md-toolbar><md-content class="md-whiteframe-z1" layout-padding=""><h2 class="md-title show-xs">{{me.album.title}}</h2><div layout="row" layout-wrap=""><div layout="column" ng-repeat="photo in me.album.photos" flex-gt-sm="20" flex="50" flex-xs="100"><div flex="" layout="" layout-align="center" layout-margin=""><img ng-src="{{photo.thumbnailUrl}}" alt="{{photo.title }}" ng-click="me.showDialog($event, photo);"></div></div></div></md-content></div></md-tab-body></md-tab></md-tabs></div></md-content>'),t.put("app/me/post.html",'<md-content class="md-padding tabs-content" layout="row" layout-align="center start"><div layout-sm="column" layout="row" flex="95" layout-padding=""><md-tabs md-selected="me.selectedPostIndex" class="panel-tabs" flex=""><md-tab><md-tab-label>Posts</md-tab-label><md-tab-body layout-padding="" layout-margin=""><div flex="" layout="row" layout-align="center start" layout-margin="" layout-wrap=""><div ng-repeat="post in me.user.posts" flex-gt-sm="30" flex="40" flex-xs="95"><md-card ng-click="me.selectPost(post);"><img ng-click="me.selectPost(post);" ng-src="http://loremflickr.com/320/320/building?random={{post.id}}"><md-card-title><md-card-title-text><span class="md-headline">{{ post.title | limitTo:12 }}</span></md-card-title-text></md-card-title><md-card-content><p>{{ post.body | limitTo:40 }}...</p></md-card-content></md-card></div></div></md-tab-body></md-tab><md-tab><md-tab-label>Post details</md-tab-label><md-tab-body><div layout="column" align="left"><md-toolbar class="md-accent md-hue-1"><div class="md-toolbar-tools"><md-button class="md-icon-button" ng-click="me.unselectPost();"><md-icon class="material-icons">arrow_back</md-icon></md-button><h2 class="md-title">{{me.post.title}}</h2><span flex=""></span><md-button class="md-icon-button" aria-label="Favorite"><md-icon class="material-icons">favorite</md-icon></md-button></div></md-toolbar><md-content class="md-whiteframe-z1" layout-padding=""><h2 class="md-display-2">{{me.post.body}}</h2></md-content></div><div layout="row" layout-wrap="" layout-padding="" layout-align="center center"><h3 flex="100">Comentarios</h3><div layout="column" layout-padding="" ng-repeat="comment in me.post.comments" flex="80"><md-content flex="" layout-padding=""><h3 class="md-title">{{comment.name}}</h3><span class="md-caption">{{comment.email}}</span><p class="md-body-1">{{comment.body}}</p></md-content></div></div></md-tab-body></md-tab></md-tabs></div></md-content>'),t.put("app/me/profile.html",'<md-content class="md-padding tabs-content" layout="row" layout-align="center start"><div layout-gt-sm="row" layout="column" flex="95" layout-padding=""><div layout="column" flex="" flex-gt-sm="50"><div layout="column" ng-cloak="" flex=""><md-toolbar><div class="md-toolbar-tools"><h2 class="md-flex"><md-icon class="material-icons">person</md-icon>About me</h2></div></md-toolbar><md-content flex="" layout-padding=""><p><strong>Username</strong><br>{{me.user.username}}</p><p><strong>Correo</strong><br>{{me.user.email}}</p><p><strong>Telefono</strong><br>{{me.user.phone}}</p></md-content></div><br><div layout="column" ng-cloak="" flex=""><md-toolbar><div class="md-toolbar-tools"><h2 class="md-flex"><md-icon class="material-icons">people</md-icon>Friends</h2></div></md-toolbar><md-content flex="" ng-repeat="friend in me.user.friends"><div layout="row" layout-align="left start"><div><img ng-src="http://loremflickr.com/100/100/dog?random={{friend.id}}" alt="User" class="friend-avatar"></div><md-content flex="" layout-padding=""><strong>{{friend.name}}</strong><br><small>{{friend.username}}</small></md-content></div><md-divider md-inset="" ng-if="!$last"></md-divider></md-content></div></div><div flex="" flex-gt-sm="50"><div layout="column"><md-toolbar><div class="md-toolbar-tools"><h2 class="md-flex"><md-icon class="material-icons">domain</md-icon>Work</h2></div></md-toolbar><md-content flex="" layout-padding=""><p><strong>Company</strong><br>{{me.user.company.name}}</p><p><strong>Catch Phrase</strong><br>{{me.user.company.catchPhrase}}</p><p><strong>Business Services</strong><br>{{me.user.company.bs}}</p></md-content></div><span flex=""></span></div></div></md-content>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" class="md-whiteframe-glow-z1 md-hue-2"><div class="md-toolbar-tools"><md-button class="center md-icon-button" ui-sref="index"><md-icon class="material-icons">whatshot</md-icon></md-button><span flex=""></span><md-button class="md-icon-button" href="https://github.com/leomoreno/test-bitgray" target="_blank"><md-icon class="material-icons">help_outline</md-icon></md-button></div></md-toolbar>')}]);