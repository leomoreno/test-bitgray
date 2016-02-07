(function() {
  'use strict';

  angular
    .module('testBitgray')
    .factory('userApi', userApi);

  /** @ngInject */
  function userApi($log, $q, $http) {
    var deferred = null;
    var users = null;
    var albums = null;
    var photos = null;
    var posts = null;
    var comments = null;

    var apiHost = 'http://jsonplaceholder.typicode.com/';

    var service = {
      getRandomUser: getRandomUser,
      getAlbums: getAlbums,
      getPhotos: getPhotos,
      getPosts: getPosts
    };

    return service;

    function getRandomUser() {
      deferred = $q.defer();
      getUsers();
      return deferred.promise;
    }
    function resolveRandomUser() {
      deferred.resolve(randomUser());
    }
    function randomUser() {
      var user = users[Math.floor(Math.random()*users.length)];
      return user;
    }
    function getUsers() {
      if(users === null){
        $http.get(apiHost + 'users')
        .then(usersComplete)
        .catch(apiCallFailed);
      }else {
        var user = users[Math.floor(Math.random()*users.length)];
        deferred.resolve(user);
      }

      function usersComplete(response) {
        users = response.data;
        getAlbums();
      }

    }
    function getAlbums() {
      return $http.get(apiHost + 'albums')
        .then(albumsComplete)
        .catch(apiCallFailed);

        function albumsComplete(response) {
          albums = response.data;
          angular.forEach(albums, function(album) {
            angular.forEach(users, function(user) {
                if(user.id === album.userId){
                    if(!user.albums){
                      user.albums = [];
                    }
                    user.albums.push(album);
                }
            });
          });
          getPhotos();
        }
    }
    function getPhotos() {
      return $http.get(apiHost + 'photos')
        .then(photosComplete)
        .catch(apiCallFailed);

        function photosComplete(response) {
          photos = response.data;
          angular.forEach(photos, function(photo) {
            angular.forEach(albums, function(album) {
                if(photo.albumId === album.id){
                    if(!album.photos){
                      album.photos = [];
                    }
                    album.photos.push(photo);
                }
            });
          });

          getPosts();
        }
    }
    function getPosts() {
      return $http.get(apiHost + 'posts')
        .then(postsComplete)
        .catch(apiCallFailed);

        function postsComplete(response) {
          posts = response.data;
          angular.forEach(posts, function(post) {
            angular.forEach(users, function(user) {
                if(user.id === post.userId){
                    if(!user.posts){
                      user.posts = [];
                    }
                    user.posts.push(post);
                }
            });
          });
          getComments();
        }
    }
    function getComments() {
      return $http.get(apiHost + 'comments')
        .then(commentsComplete)
        .catch(apiCallFailed);

        function commentsComplete(response) {
          comments = response.data;
          angular.forEach(comments, function(comment) {
            angular.forEach(posts, function(post) {
                if(post.id === comment.postId){
                    if(!post.comments){
                      post.comments = [];
                    }
                    post.comments.push(comment);
                }
            });
          });
          resolveRandomUser();
        }
    }

    function apiCallFailed(error) {
      $log.error('XHR Failed.\n' + angular.toJson(error.data, true));
      deferred.reject(error);
    }

  }
})();
