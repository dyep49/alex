main.controller('DashController', ['$scope', 'Dash', 'Inbox', 'Pin', function($scope, Dash, Inbox, Pin){

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



}])