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
		var most_view_sources = []

		this.clearArray = function(){
			sources = []
		}
	
		this.show = function(id, page, sort){
			$http({
				url: '/sources/' + id, 
				method: 'GET',
				params: {page_number: page, sort_by: sort}
			})
			.success(function(data){
				debugger;
				switch(sort)
				{
				case "most_views":
					data.forEach(function(source){
						most_view_sources.push(source);
					})
					break;
				default:
					data.forEach(function(source){
						sources.push(source);
					})
				}
			})
		}

		this.all = function(){
			$http({
				url: '/sources/',
				method: 'GET', 
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

		this.getSourcesByViews = function(){
			return most_view_sources
		}
}])


