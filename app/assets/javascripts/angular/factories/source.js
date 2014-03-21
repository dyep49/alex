// main.factory('Source', ['$resource', function($resource){
// 	function Source(){
// 		this.service = $resource('/sources/:sourceId', {sourceId: '@id'})
// 	};

// 	Source.prototype.show = function(id){
// 		return this.service.query({sourceId: id, page_number: 1});
// 	}

// 	return new Source;
// }])

main.service('Source', ['$http', function($http){
		var sources = []
	
		this.show = function(id, page){
			$http({
				url: '/sources/' + id, 
				method: 'GET',
				params: {page_number: page}
			})
				.success(function(data){
					data.forEach(function(source){
						sources.push(source);
					})
				})
		}

		this.getSources = function(){
			return sources
		}
}])

