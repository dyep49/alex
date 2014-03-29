main.controller('DashController', ['$scope', 'Dash', 'Inbox', 'Pin', '$http', '$rootScope', function($scope, Dash, Inbox, Pin, $http, $rootScope){

    function init(){
        Dash.getSavedArray()
        Dash.getHistoryArray()
        setTimeout(function(){
	        if ($scope.shares.length > 0){
				$scope.shares.forEach(function(share){
					var username = share.from_user_name
					var object = {}
					object["username"] = username
					object["pin"] = Pin.show(share.pin_id)
					object["share_id"] = share.id
					$scope.pins.push(object);
					// Inbox.fetchUser(share.from_user_id);
				})
			}
        }, 0)

    }
    
    init()

    $scope.savedArray = Dash.savedArray()
    $scope.historyArray = Dash.historyArray()


	$scope.shares = Inbox.getCount();
	$scope.share_users = Inbox.getUsers();
	$scope.pins = []

	$scope.deleteShare = function(id){
		$http.post('/users/delete_share', {id: id})
	}




}])

