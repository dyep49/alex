main.controller('SearchController', ['$scope', 'searchService', function($scope, searchService){

    $scope.titleResults = searchService.getTitleResult()
    $scope.urlResults = searchService.getUrlResult()
    $scope.descriptionResults = searchService.getDescriptionResult()

}])