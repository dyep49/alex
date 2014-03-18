main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){
	$scope.sources = Source.show($routeParams.source_name)
}])
