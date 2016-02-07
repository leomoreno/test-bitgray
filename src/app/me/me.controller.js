/* global document:false */
(function() {
  'use strict';

  angular
    .module('testBitgray')
    .controller('MeController', MeController);

  /** @ngInject */
  function MeController($scope, toastr, userApi) {
    var vm = this;
    vm.activate = activate;
    vm.selectAlbum = selectAlbum;
    vm.unselectAlbum = unselectAlbum;
    vm.selectPost = selectPost;
    vm.unselectPost = unselectPost;
    vm.loading = false;
    vm.album = null;
    vm.post = null;
    vm.photo = null;

    activate();

    function activate() {
      vm.loading = true;
      userApi.getRandomUser().then(function(user) {
        vm.user = user;
        vm.user.friends = userApi.getRandomUsers();
        vm.loading = false;
      });
    }
    function selectAlbum(album){
      vm.album = album;
      vm.selectedIndex = 1;
    }
    function unselectAlbum(){
      vm.album = null;
      vm.selectedIndex = 0;
    }
    function selectPost(post){
      vm.post = post;
      vm.selectedPostIndex = 1;
    }
    function unselectPost(){
      vm.post = null;
      vm.selectedPostIndex = 0;
    }

  }
})();
