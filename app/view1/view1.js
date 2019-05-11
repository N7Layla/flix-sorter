'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
 
  
  $scope.loadList = () => {
    var storedList = JSON.parse(localStorage["myList"]); 
    //var storedWatchList = JSON.parse(localStorage["watchList"]); 
    $scope.myList = storedList || [];
    //$scope.watchList = storedWatchList || [];
  }


  $scope.save = () => {
    localStorage["myList"] = JSON.stringify($scope.myList);
    //localStorage["watchList"] = JSON.stringify($scope.watchList);
  }
  

  $scope.listing = '';
  $scope.isTV = false;
  $scope.isFilm = false;

  $scope.results = [];

  $scope.filter = '';

  $scope.changeFilter = (str) => {
    $scope.filter = str;
  }

  $scope.addToList = (item) => {

    if ($scope.isTV) {
      item.category = "tv";
    }

    if ($scope.isFilm) {
      item.category = "film";
    }

    item.image = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    $scope.myList.push(item);
  }

  $scope.addToWatchList = (item) => {
    item.image = "https://image.tmdb.org/t/p/w500" + item.poster_path;
    $scope.watchList.push(item);

    $scope.removeItem(item);
    console.log("added to watchlist=>", $scope.watchList);
  }

  const api_key = '8593a3b4d8e63ba14e0c59a74c9bd987';

  $scope.submit = () => {
   
    let category = '';

    if ($scope.isTV === true) {
      category = "tv";
    } 
    
    if ($scope.isFilm === true) {
      category = "movie";
    }

    $http.get('https://api.themoviedb.org/3/search/' + category + '?api_key=' + api_key + '&language=en-US&page=1&query=' + $scope.listing)
    .then(data => {
      $scope.results = data.data.results;
    }, (error) => {console.error});
  }

  
  let length = (h, m) => {
    return (h * 60) + m;
  }

  $scope.filterFn = function(item)
{

    if(item.category === $scope.filter || item.original_language === $scope.filter || $scope.filter === '')
    {
        return true; 
    }

    return false; 
};

$scope.removeItem = (item) => {
  var index = $scope.myList.indexOf(item);
  if(index>=0) {
    $scope.myList.splice(index, 1);
  }
    console.log("removed-->", item)
    console.log("new=", $scope.myList)
}



}]);