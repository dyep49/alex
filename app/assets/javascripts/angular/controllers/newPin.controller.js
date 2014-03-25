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
      source_id: '',
    };

    $scope.sources = Source.getSources();

    $scope.createPin = function(){
      $scope.formData.tags = $('#tags').val();
      $http.post('/pins', $scope.formData)
        .success(function(response){
          console.log($scope.formData);
          $location.path('/pin/' + response.id)
        })
    }

    init();
}]);