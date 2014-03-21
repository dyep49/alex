main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){
	$scope.sources = Source.show($routeParams.source_name)

	$scope.loadMore = function(){
		var nextImages = [1,2,3,4]
		nextImages.forEach(function(image){
			$scope.sources.push({image_url: 'www.notathdfasf.com'})
		})
	}
}])
