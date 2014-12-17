'use strict';

/**
 * @ngdoc overview
 * @name gaChatApp
 * @description
 * # gaChatApp
 *
 * Main module of the application.
 */
var app = angular.module('gaChatApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'firebase'
]);

app.constant('FIREBASE_URL', 'https://ga-chat.firebaseio.com/');

app.config(function ($routeProvider) {
  $routeProvider
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
    .otherwise({
      redirectTo: '/'
    });
});
