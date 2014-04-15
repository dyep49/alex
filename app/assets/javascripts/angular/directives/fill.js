main.directive('fill', [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			// $(element).textfill(scope.$eval('{' + attrs.fill + '}'))
				setTimeout(function(){
					console.log('running')
					textFit($(element))				
				}, 1000)

		}
	}
}])