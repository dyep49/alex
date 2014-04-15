main.directive('fill', [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$(element).textfill(scope.$eval('{' + attrs.fill + '}'))
		}
	}
}])