main.controller('InboxController', ['$scope', 'Inbox', function($scope, Inbox){

	$scope.shares = Inbox.getCount();
}])