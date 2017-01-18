/* setup your angular app here */

angular.module('App', [])
.controller('AppController', ['$scope', function($scope){

  // DECLARE VARIABLES

  $scope.fruits = [];
  $scope.vegetables = [];
  $scope.items = fruits.concat(vegetables);

  // DECLARE FUNCTIONS

  $scope.randomizeArray = function(arr){
    console.log(arr);
    for(index=0; index<arr.length; index++){
      arr.splice(Math.floor(Math.random()*arr.length), 0, arr.splice(index, 1)[0]);
    }
    return arr;
  };

  $scope.randomizeArray($scope.items);


}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
