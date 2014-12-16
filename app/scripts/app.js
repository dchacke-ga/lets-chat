'use strict';

/**
 * @ngdoc overview
 * @name gaChatApp
 * @description
 * # gaChatApp
 *
 * Main module of the application.
 */
angular
  .module('gaChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    // $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });