main.directive('fill', [function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			debugger;
			$(element).textfill(scope.$eval('{' + attrs.fill + '}'))
		}
	}
}])