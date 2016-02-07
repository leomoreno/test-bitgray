/* global document:false */
(function() {
  'use strict';

  angular
    .module('testBitgray')
    .controller('MeController', MeController);

  /** @ngInject */
  function MeController($scope, toastr, userApi, $mdDialog, $mdMedia,$timeout) {
    var vm = this;
    vm.activate = activate;
    vm.selectAlbum = selectAlbum;
    vm.unselectAlbum = unselectAlbum;
    vm.selectPost = selectPost;
    vm.unselectPost = unselectPost;
    vm.showDialog = showDialog;
    vm.closeDialog = closeDialog;
    vm.loading = false;
    vm.album = null;
    vm.post = null;
    vm.photo = null;
    vm.friends = [];

    activate();

    function activate() {
      vm.loading = true;
      var delay =  (!vm.user)?100:3000;
      $timeout(function() {
          userApi.getRandomUser().then(function(user) {
            vm.user = user;
            vm.user.friends = userApi.getRandomUsers();
            vm.loading = false;
          });
      }, delay );
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
    function showDialog(ev, photo) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: function () { this.photo = photo; this.closeDialog = closeDialog; },
        controllerAs: 'me',
        templateUrl: 'app/me/dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    }
    function closeDialog() {
      $mdDialog.cancel();
    }

  }
})();
