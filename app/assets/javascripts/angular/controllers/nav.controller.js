main.controller('nav', ['$scope', '$http', '$location', 'searchService', 'Inbox',function($scope, $http, $location, searchService, Inbox){

    $scope.formData = {search: ''}

    $scope.searchPins = function(){
        $http.post('/pin_search', {search: $scope.formData.search})
        .success(function(data){
            searchService.addResult(data)
            $location.path('/search')
        })
    }

    $scope.inboxCount = Inbox.getCount()
    

}])

