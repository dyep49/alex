main.service('Inbox', ['$http', function($http){

	var unseen_shares = []

	var users = []

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

	this.fetchUser = function(id){
			$http({
				url: '/find_user',
				method: 'GET',
				params: {user_id: id}
			})
				.success(function(response){
					users.push(response);
				})		
	}

	this.getUsers = function(){
		return users
	}


}])
