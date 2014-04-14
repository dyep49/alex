main.directive('slick', ['$timeout', function($timeout){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			// scope.$on('repeatEnd', function(){
			$timeout(function(){
					console.log('last one');
					$('.splash-wrapper').css('visibility', 'visible')
					$('.splash-wrapper').addClass('splash-animation')
					$(element).slick(scope.$eval('{' + attrs.slick + '}'))					
			}, 1500)
			// })
		}
	}
}])
// .directive('notifyRepeatFinish', ['$timeout', function($timeout){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attr){
// 			if (scope.$last === true){
// 				$timeout(function(){
// 					scope.$emit('repeatEnd')
// 				})
// 			}
// 		}
// 	}
// }])