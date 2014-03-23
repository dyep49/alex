main.controller('nav', ['$scope', '$http', '$location', 'searchService', 'Inbox',function($scope, $http, $location, searchService, Inbox){

		function init(){
			Inbox.fetchCount()	
		}

    $scope.formData = {search: ''}

    $scope.searchPins = function(){
        $http.post('/pin_search', {search: $scope.formData.search})
        .success(function(data){
            searchService.addTitleResult(data.title)
            searchService.addUrlResult(data.url)
            searchService.addDescriptionResult(data.description)
            $location.path('/search')
        })
    }

    $scope.inboxCount = Inbox.getCount()

    init();


}])

