main.factory('Pin', ['$resource', '$http', function($resource, $http){
	function Pin(){
		this.service = $resource('/pins/:pinId', {pinId: '@id'})
	};

	Pin.prototype.create = function(id){
		return this.service.query({pinId: id})
	}

   	Pin.prototype.show = function(id) {
        return this.service.query({pinId: id})
    }

    Pin.prototype.delete = function(id) {
    	return this.service.remove({pinId: id})
    }

	return new Pin
}])