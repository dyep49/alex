main.service('Inbox', ['$http', function($http){

	var count = 0

	this.fetchCount = $http({
		url: 'get_inbox',
		method: 'GET', 
	})
		.success(function(data){
	    for (var i = 0; i < data.length; i++){
	        if (data[i].seen === false){
	            count ++
	        } 
	    }

		})

	this.getCount = function(){
		return count
	}





}])
