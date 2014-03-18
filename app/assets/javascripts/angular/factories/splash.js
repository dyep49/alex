main.factory('Splash', ['$resource', function($resource){
	function Splash(){
		this.service = $resource('/sources')
	};

	Splash.prototype.all = function(){
		return this.service.query()
	}

	return new Splash;
}])