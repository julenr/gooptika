'use strict';

angular.module('gooptikaApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/services', {
        templateUrl: 'app/services/services.html',
        controller: 'ServicesCtrl',
        controllerAs: 'SrvsCtrl'
      });
  }]);
