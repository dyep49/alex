main.factory('Splash', ['$resource', function($resource){
	function Splash(){
		this.service = $resource('/sources/:id', {id: '@id'})
	};

	Splash.prototype.all = function(id){
		return this.service.query({id: id})
	}

	return new Splash;
}])