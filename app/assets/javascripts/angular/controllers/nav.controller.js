main.controller('nav', ['$scope', '$http', function($scope, $http){

    $scope.formData = {search: ''}

    $scope.searchPins = function(){
        $http.post('/pin_search', {search: $scope.formData.search})
        .success(function(data){
            console.log(data)
        })
    }

}])

