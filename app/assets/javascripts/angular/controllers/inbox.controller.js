main.controller('InboxController', ['$scope', 'Inbox', 'Pin', '$location', '$http', function($scope, Inbox, Pin, $location, $http){
	
	function init(){
		if ($location.url() === '/inbox'){
			$http.get('/mark_read')
			Inbox.kill_count()
		}
		$scope.shares.forEach(function(share){
			var username = share.from_user_name
			var object = {}
			object["username"] = username
			object["pin"] = Pin.show(share.pin_id)
			object['seen'] = share.seen
			$scope.pins.push(object)
		})
	}

	$scope.shares = Inbox.getShares();

	$scope.share_users = Inbox.getUsers();
	
	$scope.pins = []

	init();
}])



