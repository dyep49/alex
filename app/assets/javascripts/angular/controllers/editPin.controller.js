main.controller('EditPinController', ['$scope', '$route', 'Source', '$http', '$location', '$upload', 'Pin', function($scope, $route, Source, $http, $location, $upload, Pin) {

    function init(){
      Source.clearArray();
      Source.all();
      $scope.sources = Source.getSources();
    }

    $scope.pin = Pin.show($route.current.params.pin_id)


    $scope.updatePin = function(){
        $http.post('/edit_pin', {pin: $scope.pin, tags: $('#tags').val()})
        .success(function(response){
            $location.path('/pin/source/' + $route.current.params.pin_id)
        })
    }

    $scope.deletePin = function(){
      $http.delete('/pins/' + $route.current.params.pin_id)
      .success(function(response){
          $location.path('/')
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
          $scope.pin[0].pin.image_url = data.url
        })
      }
    }

    init();
}]);