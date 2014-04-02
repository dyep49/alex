main.service('Source', ['$http', function($http){
		var sources = []
		var most_view_sources = []
		var most_recent_sources = []

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
				switch(sort)
				{
				case "most_views":
					data.forEach(function(source){
						most_view_sources.push(source);
					})
					break;
				case "most_recent":
					data.forEach(function(source){
						most_recent_sources.push(source);
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

		this.getSourcesByRecent = function(){
			return most_recent_sources
		}
}])


