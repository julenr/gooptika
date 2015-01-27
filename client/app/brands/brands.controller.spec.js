'use strict';

describe('Controller: BrandsCtrl', function () {

  // load the controller's module
  beforeEach(module('gooptikaApp'));
  beforeEach(module('socketMock'));

  var BrandsCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['goOptika', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    BrandsCtrl = $controller('BrandsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
