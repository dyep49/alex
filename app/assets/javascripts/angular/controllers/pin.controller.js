main.controller('PinController', ['$scope', '$route', '$http', 'Pin', '$location', function($scope, $route, $http, Pin, $location){

    function init(){
        $http.post('/add_view', {'id': $route.current.params.pin_id})
            .success(function(){
                console.log('test')
            })
    }

	$scope.pin = Pin.show($route.current.params.pin_id)


    $scope.savePin = function(){
        $http.post('/pin_fav', {'id': $route.current.params.pin_id})
    }

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
}])
