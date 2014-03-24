main.controller('PinController', ['$scope', '$route', '$http', 'Pin', '$location', 'User', function($scope, $route, $http, Pin, $location, User){

	function init(){
        User.currentUser();
    }

    init();

    $scope.pin = Pin.show($route.current.params.pin_id)


    $scope.savePin = function(){
        $http.post('/pin_fav', {'id': $route.current.params.pin_id})
    }

    $scope.adminStatus = User.getUserStatus();

    $scope.formData = {
    	sendTo: '',
    	pin_id: $route.current.params.pin_id
    }

    $scope.sharePin = function(){
        $http.post('/pin_share', $scope.formData)
    }

    $scope.nextPin = function(source_id, pin_id, direction){
        $http({
            url: '/next_pin',
            method: 'GET',
            params: {source_id: source_id, pin_id: pin_id, direction: direction}
        })
            .success(function(response){
                $location.path('/pin/' + response.id)             
            })
    }

    $scope.deletePin = function(){
        var source_id = $scope.pin[0].pin.source_id
        Pin.delete($route.current.params.pin_id)
        $location.path('/source/' + source_id)
    }    
}])
