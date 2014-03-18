main.directive('slider', function($timeout){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			$timeout(function(){
				$(element).bxSlider(scope.$eval(attrs.slider))
			}, 1000)
		}
	}
})

