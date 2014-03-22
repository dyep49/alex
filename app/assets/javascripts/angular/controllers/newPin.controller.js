main.controller('NewPinController', ['$scope', 'Source', '$http', '$location', function($scope, Source, $http, $location) {

    function init(){
      Source.all();
    }

    $scope.formData = {
      image_url: '',
      title: '',
      description: '',
      url: '',
      tags: '',
      source_id: ''
    };

    $scope.sources = Source.getSources();

    $scope.createPin = function(){
      $http.post('/pins', $scope.formData)
        .success(function(response){
          $location.path('/pin/' + response.id)
        })
    }

    init();
}]);