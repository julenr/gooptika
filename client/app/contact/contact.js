'use strict';

angular.module('gooptikaApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });
