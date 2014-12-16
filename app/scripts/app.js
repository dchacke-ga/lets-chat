'use strict';

/**
 * @ngdoc overview
 * @name gaChatApp
 * @description
 * # gaChatApp
 *
 * Main module of the application.
 */
app = angular.module('gaChatApp', [
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
