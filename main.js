var app = angular.module('sw', []);

app.controller('sw-board', function($scope,$http) {
  $http.get('data.json').then(function (res){
  $scope.regions = res.data;
  });
  $scope.probe = (planet) => planet.probed ? planet.probed = 0 : planet.probed = 1;
  $scope.explore = (planet) => planet.explored ? planet.explored = 0 : planet.explored = 1;
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
