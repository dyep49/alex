// var mainControllers = angular.module('mainControllers', [])


main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.array = Splash.all()
}]);

main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){
	console.log($routeParams.source_name);
	$scope.sources = Source.show($routeParams.source_name)
}])

// mainControllers.controller('site', function($scope) {
//     $scope.array = [] //ajax to get all pins for a site
// });

// mainControllers.controller('tag', function($scope) {
//     $scope.array = [] //ajax to get all pins of a tag
// });

// mainControllers.controller('pin', function($scope) {
//     $scope.array = [] // ajax to get a pin (realize we would already have it down
//                       // but just going and getting it is simpler
// });

