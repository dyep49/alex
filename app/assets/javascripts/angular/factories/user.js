main.service('User', ['$http', function($http){


	var status = []

	this.currentUser = function(){
		$http.get('/users/current_user')
			.success(function(response){
				status.push(response)
			})
	}

	this.getUserStatus = function(){
		return status
	}
}])