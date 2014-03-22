main.service('Inbox', ['$http', function($http){

	var unseen_shares = []

	this.fetchCount = function(){
		$http({
		url: 'get_inbox',
		method: 'GET', 
	})
		.success(function(data){
	    for (var i = 0; i < data.length; i++){
	        if (data[i].seen === false){
	            unseen_shares.push(data[i])
	        } 
	    }
		})
	}

	this.getCount = function(){
		return unseen_shares
	}
}])
