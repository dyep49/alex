main.controller('NewPinController', ['$scope', 'Source', '$http', function($scope, Source, $http) {
    $scope.formData = {
      image_url: '',
      title: '',
      description: '',
      url: '',
      tags: ''
    };

    $scope.sources = Source.show()

    $scope.createPin = function(){
      $http.post('/pins', $scope.formData)
    }
}]);