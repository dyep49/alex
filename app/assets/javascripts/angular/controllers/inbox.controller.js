main.controller('InboxController', ['$scope', 'Inbox', 'Pin', function($scope, Inbox, Pin){
	
	function init(){
		$scope.shares.forEach(function(share){
			$scope.pins.push(Pin.show(share.pin_id))
		})
	}

	$scope.shares = Inbox.getCount();
	
	$scope.pins = []

	init();
}])


