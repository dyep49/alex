main.controller('SearchController', ['$scope', 'searchService', function($scope, searchService){

    $scope.result = searchService.getResult()

}])