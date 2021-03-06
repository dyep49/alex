main.factory('Pin', ['$resource', '$http', '$location', function($resource, $http, $location){
	function Pin(){
		this.service = $resource('/pins/:pinId', {pinId: '@id'})
	};

	Pin.prototype.create = function(id){
		return this.service.query({pinId: id})
	}

   	Pin.prototype.show = function(id) {
   		self = this
        return this.service.query({pinId: id})
        	// .$promise.then(
        	// 	function(value){
        	// 		return value.$promise
        	// 	},
        	// 	function(error){
        	// 		$location.path('/dash')
        	// 	}
        	// )
    }

    Pin.prototype.delete = function(id) {
    	return this.service.remove({pinId: id})
    }

	return new Pin
}])