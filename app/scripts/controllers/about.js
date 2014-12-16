'use strict';

/**
 * @ngdoc function
 * @name gaChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gaChatApp
 */
angular.module('gaChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
