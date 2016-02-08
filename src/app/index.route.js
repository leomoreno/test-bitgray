(function() {
  'use strict';

  angular
    .module('testBitgray')
    .config(routeConfig);

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
    });
    $locationProvider.html5Mode(true);
  }
})();
