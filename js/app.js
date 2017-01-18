angular.module('App', [])
.controller('AppController', ['$scope', function($scope){

  // DECLARE VARIABLES

  $scope.fruits = [];
  $scope.vegetables = [];
  $scope.pool = fruits.concat(vegetables);

  // DECLARE FUNCTIONS

  // RANDOMIZE ARRAY
  $scope.randomizeArray = function(arr){
    arr.forEach(function(item, index){
      arr.splice(Math.floor(Math.random()*arr.length), 0, arr.splice(index, 1)[0]);
    });
    return arr;
  };

  // MOVE ITEM FROM FRUITS TO POOL
  $scope.moveFromFruitsToPool = function(index){
    $scope.pool.push($scope.fruits.splice(index, 1)[0]);
  };

  // MOVE ITEM FROM POOL TO FRUITS
  $scope.moveFromPoolToFruits = function(index){
    $scope.fruits.push($scope.pool.splice(index, 1)[0]);
  };

  // MOVE ITEM FROM POOL TO VEGETABLES
  $scope.moveFromPoolToVegetables = function(index){
    $scope.vegetables.push($scope.pool.splice(index, 1)[0]);
  };

  // MOVE ITEM FROM VEGETABLES TO POOL
  $scope.moveFromVegetablesToPool = function(index){
    $scope.pool.push($scope.vegetables.splice(index, 1)[0]);
  };

  // CHECK IF ITEM IN ORIGINAL FRUITS
  $scope.inFruits = function(index){
    if(fruits.indexOf($scope.fruits[index])>=0){
      return true;
    } else{
      return false;
    }
  };

  // CHECK IF ITEM IN ORIGINAL VEGETABLES
  $scope.inVegetables = function(index){
    if(vegetables.indexOf($scope.vegetables[index])>=0){
      return true;
    } else{
      return false;
    }
  };

  // CHECK IF ALL ITEMS IN CORRECT COLUMN
  $scope.allCorrect = function(){
    var result = true;
    $scope.fruits.forEach(function(fruit){
      if(vegetables.indexOf(fruit)>=0){
        result = false;
      } else{
        // do nothing
      }
    });
    $scope.vegetables.forEach(function(vegetable){
      if(fruits.indexOf(vegetable)>=0){
        result = false;
      } else{
        // do nothing
      }
    });
    return result;
  };

  // RUN RANDOMIZE FRUITS AND VEGETABLES
  $scope.randomizeArray($scope.pool);


}]);
