main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.array = Splash.all()

    $scope.currentSlider = 0
    $scope.total = 7
}]);
