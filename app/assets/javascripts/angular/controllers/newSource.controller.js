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