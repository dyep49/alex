main.controller('SourceController', ['$scope', '$routeParams', 'Source', 'Splash', '$location', '$interval', function($scope, $routeParams, Source, Splash, $location, $interval){

	var page = 1
	
	function init(){
		Source.show($routeParams.source_name, page, $routeParams.sort_by);
		setTimeout(function(){
			if($scope.sources.length ===0){
				alert("No Pins here yet")
				window.location = "#/dash"
			}
		}, 1000)
		page ++;
	}


	switch($routeParams.sort_by)
	{
	case "most_views":
		$scope.sources = Source.getSourcesByViews();
		break;
    case 'month':
        $scope.sources = Source.getSourcesByMonth();
        break;
    case 'week':
        $scope.sources = Source.getSourceByWeek();
        break;
	case "most_recent":
		$scope.sources = Source.getSourcesByRecent();
		break;
	default: 
		$scope.sources = Source.getSources();
	}

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

    $scope.mostMonth = function(){
        $location.path('/source/' + $routeParams.source_name + '/month')
    }

    $scope.mostWeek = function(){
        $location.path('/source/' + $routeParams.source_name + '/week')
    }

	$scope.sourceImage = Splash.all($routeParams.source_name)

}])
