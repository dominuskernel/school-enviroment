'use strict';

var dmkCarousel = function(){
  return {
    restrict: 'AE',
    templateUrl: '/templates/carousel.html',
    scope: {
      dmkInterval: "=",
      dmkSlides: "=",
      dmkNoWrap: "="
    },
    link: function(scope) {}
  };
}

angular
.module('dmk.carousel',[])
.directive('dmkCarousel',[dmkCarousel]);
