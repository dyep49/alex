main.controller('NewSourceController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.formData = {
      url: '',
      image_url: '',
      name: ''
    };

    $scope.createSource = function(){
      $http.post('/sources', $scope.formData)
      $location.url('/')
    }

    $scope.cats = [
        {name: 'Sports'},
        {name: 'Humor'},
        {name: 'Tech'},
        {name: 'News'},
        {name: 'Music'},
        {name: 'Video'},
        {name: 'Other'}
    ]

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
          $scope.formData.image_url = data.url
        })
      }
    }
}])