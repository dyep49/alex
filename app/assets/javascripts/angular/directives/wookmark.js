main.directive('wookmark', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$(element).wookmark(scope.$eval(attrs.slider))
		}
	}



})