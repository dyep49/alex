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

	    $.fn.resizeText = function(){
      var size = parseInt($(this).css("fontSize"));  
      var html = $(this).html();
      var textLength = html.length;
      var span = '<span>' + html + '</span>';
      $(this).html(span);
      var width = $(this).find('span:first').width();
      $(this).html(html);
      var newSize = $(this).width()/width*size; 
      $(this).css("fontSize", (newSize/1.2) + 2);
      return width;
    };


    var resize = $interval(function(){
        if ($('p').length === 1){
          $("p").resizeText();
          $interval.cancel(resize)          
        }
    }, 500)

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

	$scope.sourceImage = Splash.all($routeParams.source_name)

}])
