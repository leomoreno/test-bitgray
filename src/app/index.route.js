(function() {
  'use strict';

  angular
    .module('testBitgray')
    .config(routeConfig);

  // function routeConfig($routeProvider, $locationProvider) {
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('index', {
      url: "/",
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('me', {
      url: "/me",
      templateUrl: 'app/me/me.html',
      controller: 'MeController',
      controllerAs: 'me'
    })
    .state('me.photos', {
      url: "/me/photos",
      views: {
        "photos-view": {
          templateUrl: 'app/photo/photo.html',
          controller: 'PhotoController',
          controllerAs: 'photo'
        },
        "posts-view": {}
      }
    })
    .state('me.posts', {
      url: "/me/posts",
      views: {
        "photos-view": {},
        "posts-view": {
          templateUrl: 'app/post/post.html',
          controller: 'PostController',
          controllerAs: 'post'
        }
      }
    });
    $locationProvider.html5Mode(true);

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'app/main/main.html',
    //     controller: 'MainController',
    //     controllerAs: 'main'
    //   })
    //   .when('/me', {
    //     templateUrl: 'app/me/me.html',
    //     controller: 'MeController',
    //     controllerAs: 'me'
    //   })
    //   .when('/photo', {
    //     templateUrl: 'app/photo/photo.html',
    //     controller: 'PhotoController',
    //     controllerAs: 'photo'
    //   })
    //   .when('/post', {
    //     templateUrl: 'app/post/post.html',
    //     controller: 'PostController',
    //     controllerAs: 'post'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
    //
    //   $locationProvider.html5Mode(true);
  }

})();
