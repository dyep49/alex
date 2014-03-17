main.factory('Pin', ['$resource', function($resource){
	function Pin(){
		this.service = $resource('/pins/:pinId', {pinId: '@id'})
	};

	Pin.prototype.show = function(id){
		return this.service.query({pinId: id});
	}

	return new Pin
}])