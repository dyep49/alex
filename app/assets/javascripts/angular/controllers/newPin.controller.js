main.controller('NewPinController', ['$scope', 'Source', '$http', '$location', '$upload', '$interval', function($scope, Source, $http, $location, $upload, $interval) {

    function init(){
      Source.clearArray()
      Source.all();
      $scope.sources = Source.getSources();
    }

    $scope.formData = {
      image_url:   '',
      title:       '',
      description: '',
      url:         '',
      tags:        '',
      source_id:   ''
    };

    $scope.createPin = function(){
      $scope.formData.tags = $('#tags').val();
      $http.post('/pins', $scope.formData)
      .success(function(response){
        console.log($scope.formData);
        $location.path('/pin/source/' + response.id)
      })
    }

    $scope.onFileSelect = function($files){

      console.log($files);
      for (var i=0; i < $files.length; i++){
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: '/image_upload',
          method: 'POST',
          file: file
        })
        .success(function(data){
          console.log(data)
          $scope.formData.image_url = data.url
        })
      }
    }

    init();
}]);