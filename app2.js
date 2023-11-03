//IIFE function
(function(){
  'use strict'; //enable things to protect us from errors
angular.module('myFirstApp',[]) //(name of our app, list of dependencies )
.controller('MyFirstController', function($scope){ //we are using an angular object that share data from view model to the view
$scope.name = "Jodi";
$scope.sayHello = function(){
  return "Hello Queen "+ $scope.name;
};
}); //it takes the name of our view model or controller and define a function for this controller

})();
