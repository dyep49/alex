main.controller('NewPinController', ['$scope', 'Source', '$http', '$location', '$upload', function($scope, Source, $http, $location, $upload) {

    function init(){
      Source.all();
    }

    $scope.formData = {
      image_url: '',
      image: '',
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

    $scope.onFileSelect = function($files){
      console.log($files);
      for (var i=0; i < $files.length; i++){
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/pins',
          method: 'POST',
          file: file
        })
      }
    }

    init();
}]);