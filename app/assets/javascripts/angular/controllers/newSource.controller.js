main.controller('NewSourceController', ['$scope', '$http', '$location', '$upload', function($scope, $http, $location, $upload) {
    $scope.formData = {
      url: '',
      img_url: '',
      name: '',
      cat: '' 

    };

    $scope.createSource = function(){
      $http.post('/sources', $scope.formData)
      $location.url('/')
    }

    $scope.show = true

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
      $scope.show = false
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
          $scope.formData.img_url = data.url
        })
      }
    }
}])