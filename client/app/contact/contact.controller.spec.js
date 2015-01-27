'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('gooptikaApp'));
  beforeEach(module('socketMock'));

  var ContactCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['goOptika', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
