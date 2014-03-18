main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.array = Splash.all()
}]);
