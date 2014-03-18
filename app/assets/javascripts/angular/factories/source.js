main.factory('Source', ['$resource', function($resource){
	function Source(){
		this.service = $resource('/sources/:sourceId', {sourceId: '@id'})
	};

	Source.prototype.show = function(id){
		return this.service.query({sourceId: id});
	}

	return new Source;
}])