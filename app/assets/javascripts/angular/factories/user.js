main.service('User', ['$http', function($http){


	var status = []

	var all_users = []

	this.allUsers = function(){
		all_users = []
		$http.get('/all_users')
			.success(function(response){
				all_users.push(response)
			})
	}

	this.currentUser = function(){
		$http.get('/users/current_user')
			.success(function(response){
				status.push(response)
			})
	}

	this.getUserStatus = function(){
		return status
	}

	this.getAllUsers = function(){
		return all_users
	}
}])