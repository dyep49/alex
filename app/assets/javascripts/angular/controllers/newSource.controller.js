main.controller('NewSourceController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.formData = {
      url: '',
      img_url: '',
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
}])