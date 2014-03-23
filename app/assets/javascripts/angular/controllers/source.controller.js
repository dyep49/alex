main.controller('SourceController', ['$scope', '$routeParams', 'Source', '$location', function($scope, $routeParams, Source, $location){

	var page = 1
	
	function init(){
		Source.show($routeParams.source_name, page, $routeParams.sort_by);
		page ++;
	}

	switch($routeParams.sort_by)
	{
	case "most_views":
		$scope.sources = Source.getSourcesByViews();
		break;
	case "most_recent":
		$scope.sources = Source.getSourcesByRecent();
		break;
	default: 
		$scope.sources = Source.getSources();
	}
	// if($routeParams.sort_by == "most_views"){
	// 	$scope.sources = Source.getSourcesByViews()
	// } else {
	// 	$scope.sources = Source.getSources();
	// }


	init();

	$scope.loadMore = function(){
		Source.show($routeParams.source_name, page, $routeParams.sort_by)
		page ++
	}

	$scope.mostRecent= function(){
		$location.path('/source/' + $routeParams.source_name + '/most_recent')
	}

	$scope.mostViewed = function(){
		$location.path('/source/' + $routeParams.source_name + '/most_views')
	}

}])
