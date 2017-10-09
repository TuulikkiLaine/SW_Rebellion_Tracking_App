var app = angular.module('sw', []);

app.controller('sw-board', function($scope,$document) {
  $scope.regions = [
    {'name' : 'Mon-Calamari Region', 'planets':[
        {'id':1,'name' : 'Mon Calamari', 'probed' :0, 'explored' :0},
        {'id':2,'name' : 'Yavin', 'probed' :0, 'explored' :0},
        {'id':3,'name' : 'Felucia', 'probed' :0, 'explored' :0},
        {'id':4,'name' : 'Saleucami', 'probed' :0, 'explored' :0}
        ]},
    {'name' : 'Nal-Hutta Region','planets':[
      {'id':1,'name' : 'Nal Hutta', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Kessel', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Toydaria', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Bothawui', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Rodia Region','planets':[
      {'id':1,'name' : 'Tatooine', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Rodia', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Ryloth', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Geonosis', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Utapau Region','planets':[
      {'id':1,'name' : 'Utapau', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Naboo', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Dagobah', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Sullust', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Mygeeto Region','planets':[
      {'id':1,'name' : 'Dantooine', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Mygeeto', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Ilum', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Ord Mantell', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Kashyyyk Region','planets':[
      {'id':1,'name' : 'Dathomir', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Mandalore', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Kashyyyk', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Malastare', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Coruscant Region','planets':[
      {'id':1,'name' : 'Coruscant', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Cato Neimodia', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Alderaan', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Corellia', 'probed' :0, 'explored' :0}
    ]},
    {'name' : 'Mustafar Region','planets':[
      {'id':1,'name' : 'Bespin', 'probed' :0, 'explored' :0},
      {'id':2,'name' : 'Mustafar', 'probed' :0, 'explored' :0},
      {'id':3,'name' : 'Endor', 'probed' :0, 'explored' :0},
      {'id':4,'name' : 'Hoth', 'probed' :0, 'explored' :0}
    ]}
    ];
    $scope.probe = (planet) => planet.probed ? planet.probed = 0 : planet.probed = 1;
    $scope.explore = (planet) => planet.explored ? planet.explored = 0 : planet.explored = 1;
});
