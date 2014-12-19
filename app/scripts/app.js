'use strict';

/**
 * @ngdoc overview
 * @name gaChatApp
 * @description
 * # gaChatApp
 *
 * Main module of the application.
 */
var app = angular.module('letsChatApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
]);

app.constant('FIREBASE_URL', 'https://lets-chat.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/rooms'
    })
    .when('/users/new', {
      templateUrl: 'views/users/new.html',
      controller: 'AuthCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/sessions/new', {
      templateUrl: 'views/sessions/new.html',
      controller: 'AuthCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/rooms', {
      templateUrl: 'views/rooms/index.html',
      controller: 'RoomsCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/rooms/new', {
      templateUrl: 'views/rooms/new.html',
      controller: 'RoomsCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .when('/rooms/:id', {
      templateUrl: 'views/rooms/show.html',
      controller: 'RoomsCtrl',
      resolve: {
        user: function(Auth) {
          return Auth.resolveUser();
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
});
