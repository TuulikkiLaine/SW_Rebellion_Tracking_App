var app = angular.module('sw', []);

app.controller('sw-board', function($scope,$document) {
  $scope.regions = [
    {'name' : 'Mon-Calamari Region', 'planets':[
        {'name' : 'Mon Calamari', 'probed' :0, 'explored' :0},
        {'name' : 'Yavin', 'probed' :0, 'explored' :0},
        {'name' : 'Felucia', 'probed' :0, 'explored' :0},
        {'name' : 'Saleucami', 'probed' :0, 'explored' :0}
        ]},
    {'name' : 'Nal-Hutta Region','planets':[
      {'name' : 'Nal Hutta', 'probed' :0, 'explored' :0},
      {'name' : 'Kessel', 'probed' :0, 'explored' :0},
      {'name' : 'Toydaria', 'probed' :0, 'explored' :0},
      {'name' : 'Bothawui', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Rodia Region','planets':[
      {'name' : 'Tatooine', 'probed' :0, 'explored' :0},
      {'name' : 'Rodia', 'probed' :0, 'explored' :0},
      {'name' : 'Ryloth', 'probed' :0, 'explored' :0},
      {'name' : 'Geonosis', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Utapau Region','planets':[
      {'name' : 'Utapau', 'probed' :0, 'explored' :0},
      {'name' : 'Naboo', 'probed' :0, 'explored' :0},
      {'name' : 'Dagobah', 'probed' :0, 'explored' :0},
      {'name' : 'Sullust', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Mygeeto Region','planets':[
      {'name' : 'Dantooine', 'probed' :0, 'explored' :0},
      {'name' : 'Mygeeto', 'probed' :0, 'explored' :0},
      {'name' : 'Ilum', 'probed' :0, 'explored' :0},
      {'name' : 'Ord Mantell', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Kashyyyk Region','planets':[
      {'name' : 'Dathomir', 'probed' :0, 'explored' :0},
      {'name' : 'Mandalore', 'probed' :0, 'explored' :0},
      {'name' : 'Kashyyyk', 'probed' :0, 'explored' :0},
      {'name' : 'Malastare', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Coruscant Region','planets':[
      {'name' : 'Coruscant', 'probed' :0, 'explored' :0},
      {'name' : 'Cato Neimodia', 'probed' :0, 'explored' :0},
      {'name' : 'Alderaan', 'probed' :0, 'explored' :0},
      {'name' : 'Corellia', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Mustafar Region','planets':[
      {'name' : 'Bespin', 'probed' :0, 'explored' :0},
      {'name' : 'Mustafar', 'probed' :0, 'explored' :0},
      {'name' : 'Endor', 'probed' :0, 'explored' :0},
      {'name' : 'Hoth', 'probed' :0, 'explored' :0}
    ]}
    ];
    $scope.probe = (planet) => planet.probed ? planet.probed = 0 : planet.probed = 1;
    $scope.explore = (planet) => planet.explored ? planet.explored = 0 : planet.explored = 1;
});
