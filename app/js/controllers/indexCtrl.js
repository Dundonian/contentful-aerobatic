
angular.module('controllers').controller('IndexCtrl', function($scope, $location, aerobatic, contentfulClient) {
  'use strict';

  $scope.repoUrl = 'https://github.com/aerobatic/angular-seed/';

  contentfulClient.space().then(function (space) {
    $scope.space = space;
  });
});
