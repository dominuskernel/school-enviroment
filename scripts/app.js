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
};

var LoadCarousel = function($scope, $http){
    $scope.interval = 5000;
    $scope.noWrap = false;
    $http.get('../data/slides.json').success(function(data){
      $scope.slides = data;
    });

    $scope.changeSlide = function(slide) {
      for(var i = 0; i < $scope.slides.length; i++){
        $scope.slides[i].active = false;
      }
      for(var i = 0; i < $scope.slides.length; i++){
        $scope.slides[i].active = slide == $scope.slides[i].text;
      }
    }
};

var LoadDataMenu = function($scope, $http){
    $scope.optionName = "";
    $scope.placeHolder = "Todo";
    $scope.urlOption = "";
    $scope.iconDropdown = "drop-down";
    $scope.search1 = true;
    $scope.search2 = true;
    $scope.toggeMenu = false;

    $scope.$on('option',function(event, name, url){
      $scope.optionName = name;
      $scope.urlOption = url;
      console.log($scope.optionName);
      console.log($scope.urlOption);
    });

    $scope.$on('dropDown',function(event, name, url){
      $scope.optionName = name;
      $scope.urlOption = url;
      console.log($scope.optionName);
      console.log($scope.urlOption);
    });

    $scope.$on('subOption',function(event, name, url){
      $scope.optionName = name;
      $scope.urlOption = url;
      console.log($scope.optionName);
      console.log($scope.urlOption);
    });

    $http.get('../data/menu.json').success(function(data){
      $scope.dmkOptions = data
      return
    });
}

angular
.module('app',['ui.bootstrap','dmk.carousel','dmk.menu'])
.controller('ExampleWeb',ExampleWeb)
.controller('LoadCarousel', LoadCarousel)
.controller('LoadDataMenu', LoadDataMenu);

ExampleWeb.$inject = ['$scope','$http'];
LoadCarousel.$inject = ['$scope','$http'];
LoadDataMenu.$inject = ['$scope','$http'];
