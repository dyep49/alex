main.controller('nav', ['$scope', '$http', '$location', 'searchService',function($scope, $http, $location, searchService){

    $scope.formData = {search: ''}

    $scope.searchPins = function(){
        $http.post('/pin_search', {search: $scope.formData.search})
        .success(function(data){
            searchService.addResult(data)
            $location.path('/search')
        })
    }
    

}])

