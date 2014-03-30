main.controller('EditPinController', ['$scope', '$route', 'Source', '$http', '$location', '$upload', 'Pin', function($scope, $route, Source, $http, $location, $upload, Pin) {

    function init(){
      Source.all();
    }

    $scope.pin = Pin.show($route.current.params.pin_id)

    $scope.sources = Source.getSources();

    $scope.updatePin = function(){
        $http.post('/edit_pin', {pin: $scope.pin, tags: $('#tags').val()})
        .success(function(response){
            $location.path('/pin/source/' + $route.current.params.pin_id)
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