'use strict';

describe('Controller: ServicesCtrl', function () {

  // load the controller's module
  beforeEach(module('gooptikaApp'));
  beforeEach(module('socketMock'));
  beforeEach(module('slick'));

  var ServicesCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['goOptika', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ServicesCtrl = $controller('ServicesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
