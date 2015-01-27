'use strict';

angular.module('gooptikaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/brands', {
        templateUrl: 'app/brands/brands.html',
        controller: 'BrandsCtrl',
        controllerAs: 'Brands'
      });
  });


