main.controller('PinController', ['$scope', '$route', '$http', 'Pin', '$location', 'User', '$upload', '$rootScope', '$interval', function($scope, $route, $http, Pin, $location, User, $upload, $rootScope, $interval){

	function init(){
        User.currentUser();
        setTimeout(function(){
            if($scope.pin.length === 0){
                alert('Pin does not exist')
                window.location = "#/dash"
            }
        }, 1000)
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
            params: {source_id: source_id, pin_id: pin_id, direction: direction, tag_name: $route.current.params.tag_name}
        })
            .success(function(response){
                $location.path('/pin/' + $route.current.params.tag_name + '/' + response.id)             
            })
    }

    $scope.deletePin = function(){
        var source_id = $scope.pin[0].pin.source_id
        Pin.delete($route.current.params.pin_id)
        $location.path('/source/' +  source_id)
    }    

    $scope.not_admin = !($http.get('users/current_user'))

    $scope.goEdit = function(){
        $location.path('/edit/' + $route.current.params.pin_id)
    }




}])
