'use strict';

angular.module('gooptikaApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {'title': 'Home','link': '/'},
      {'title': 'Services','link': '/services'},
      {'title': 'Eye Health','link': '/eyehealth'},
      {'title': 'Brands','link': '/brands'},
      {'title': 'Contact','link': '/contact'}
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.setRoute = function(route) {
      $scope.isCollapsed = true;
        $location.path(route);
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
