'use strict';

angular.module('gooptikaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/eyehealth', {
        templateUrl: 'app/eyehealth/eyehealth.html',
        controller: 'EyeHealthCtrl'
      });
  });
