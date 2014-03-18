main.controller('PinController', ['$scope', '$http', '$routeParams', 'Pin', function($scope, $routeParams, $http, Pin){
    
	$scope.pin = Pin.show($routeParams.pin_id)

    $scope.savePin = function(){
        // $http.get('/pin_save' )
    }
    
}])