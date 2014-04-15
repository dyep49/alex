main.directive('fill', [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			// $(element).textfill(scope.$eval('{' + attrs.fill + '}'))
				setTimeout(function(){
					console.log('running')
					textFit($(element))	
					$(element).css('opacity', 1)			
				}, 1000)

		}
	}
}])