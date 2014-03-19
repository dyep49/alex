main.controller('PinController', ['$scope', '$route', '$http', 'Pin', function($scope, $route, $http, Pin){

	$scope.pin = Pin.show($route.current.params.pin_id)

    $scope.savePin = function(){
        $http.post('/pin_fav', {'id': $route.current.params.pin_id})
    }

    $scope.formData = {sendTo: ''}

    $scope.sharePin = function(){
        $http.post('/pin_share', $scope.formData)
    }
    
}])