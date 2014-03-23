main.controller('InboxController', ['$scope', 'Inbox', 'Pin', function($scope, Inbox, Pin){
	
	function init(){
		$scope.shares.forEach(function(share){
			var username = share.from_user_name
			var object = {}
			object["username"] = username
			object["pin"] = Pin.show(share.pin_id)
			$scope.pins.push(object);
			// Inbox.fetchUser(share.from_user_id);
		})
	}

	$scope.shares = Inbox.getCount();

	$scope.share_users = Inbox.getUsers();
	
	$scope.pins = []

	init();
}])



