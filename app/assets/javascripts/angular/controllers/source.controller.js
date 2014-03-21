main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){

	var page = 1
	
	function init(){
		Source.show($routeParams.source_name, page);
		page ++;
	}

	$scope.sources = Source.getSources()

	init();

	$scope.loadMore = function(){
		Source.show($routeParams.source_name, page)
		page ++
	}
}])
