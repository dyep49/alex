main.controller('PinController', ['$scope', '$routeParams', 'Pin', function($scope, $routeParams, Pin){
	$scope.pin = Pin.show($routeParams.pin_id)
}])