main.controller('SearchController', ['$scope', function($scope){
    $scope.result = searchService.getResult()
}])