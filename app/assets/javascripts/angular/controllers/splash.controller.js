main.controller('SplashController', ['$scope', 'Splash', function($scope, Splash) {
    $scope.sports = Splash.all('sports')
    $scope.video = Splash.all('video')
    $scope.music = Splash.all('music')
    $scope.news = Splash.all('news')
    $scope.tech = Splash.all('tech')
    $scope.humor = Splash.all('humor')
    $scope.other = Splash.all('other')

    $scope.currentSlider = 0
    $scope.total = 7
}]);
