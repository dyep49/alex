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

// new pin
main.controller('NewPinController', ['$scope', 'Source', '$http', function($scope, Source, $http) {
    $scope.formData = {
      image_url: '',
      title: '',
      description: '',
      url: '',
      tags: ''
    };

    $scope.sources = Source.show()
    // $scope.sources 


    $scope.createPin = function(){
      $http.post('/pins', $scope.formData)
    }
}]);

main.controller('NewSourceController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {
      url: '',
      image_url: '',
      name: ''
    };

    $scope.createSource = function(){
      $http.post('/sources', $scope.formData)
    }
}]);

