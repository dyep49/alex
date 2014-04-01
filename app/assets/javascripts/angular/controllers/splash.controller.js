main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.sports = Splash.all(1)
    $scope.video = Splash.all(2)
    $scope.music = Splash.all(3)
    $scope.news = Splash.all(4)
    $scope.tech = Splash.all(5)
    $scope.humor = Splash.all(6)
    $scope.other = Splash.all(7)

    $scope.currentSlider = 0
    $scope.total = 7
}]);
