main.controller('SourceController', ['$scope', '$routeParams', 'Source', function($scope, $routeParams, Source){
	$scope.sources = Source.show($routeParams.source_name)

	function init(){
		setTimeout(function(){
			$('#tiles li').wookmark({
			autoResize: true,
			container: $('#tiles'),
			offset: 2, 
			itemWidth: 210,
			flexibleWidth: '20%'
			})
		},5000)
	}

	init();
}])
