main.service('Inbox', ['$http', function($http){

	var shares = []

	var unseen_count = []

	var users = []

	this.fetchCount = function(){
		shares.splice(0, shares.length)
		unseen_count = []
		$http({
			url: 'get_inbox',
			method: 'GET', 
		})
		.success(function(data){
		    for (var i = 0; i < data.length; i++){
		        shares.push(data[i])
		        if (data[i].seen === false){
		        	unseen_count.push(1)
		        } 
		    }
		})
	}

	this.getCount = function(){
		return unseen_count
	}

	this.kill_count = function(){
		unseen_count = []
	}

	this.getShares = function(){
		return shares
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
