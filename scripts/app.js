'use strict';

var ExampleWeb = function($scope,$http){
  $scope.greet = "hola";
  $scope.showList = false;
  $http.get("../data/data.json").success(function(data){
    $scope.list = data;
  });

  $scope.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
}

angular
.module('app',['ui.bootstrap'])
.controller('ExampleWeb',ExampleWeb);

ExampleWeb.$inject = ['$scope','$http'];
