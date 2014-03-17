// var mainControllers = angular.module('mainControllers', [])


main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.array = Splash.all()
}]);

main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){
	$scope.sources = Source.show($routeParams.source_name)
}])

main.controller('PinController', ['$scope', '$routeParams', 'Pin', function($scope, $routeParams, Pin){
	$scope.pin = Pin.show($routeParams.pin_id)
}])