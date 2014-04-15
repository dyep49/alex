main.directive('slick', ['$timeout', '$interval', function($timeout, $interval){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			// scope.$on('repeatEnd', function(){
			$timeout(function(){
					console.log('last one');
					$('.splash-wrapper').css('visibility', 'visible')
					$('.splash-wrapper').addClass('splash-animation')
			}, 1500)

			var slickInterval = $interval(function(){
				array = []
				imgArray = document.getElementsByTagName('img')
				imgArray = Array.prototype.slice.call(imgArray);
				imgArray.forEach(function(image){
					if(image.complete === false) {
						return false
					} else {
						array.push(true)
					}
				})
				$timeout(function(){
					console.log('TEST')
					if(array.indexOf(false) === -1) {
						$(element).slick(scope.$eval('{' + attrs.slick + '}'))
						$interval.cancel(slickInterval)				
					}
				}, 0)
			}, 500)



		
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