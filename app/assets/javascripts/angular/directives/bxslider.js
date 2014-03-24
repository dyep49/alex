// main.directive('slider', function($timeout){
// 	return {
// 		restrict: 'A',
// 		link: function(scope, element, attrs){
// 			$timeout(function(){
// 				$(element).bxSlider(scope.$eval(attrs.slider))
// 			}, 1000)
// 		}
// 	}
// })

main.directive('bxSlider', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$on('repeatFinished', function () {
                console.log("ngRepeat has finished");
                element.bxSlider(scope.$eval('{' + attrs.bxSlider + '}'));
            });
        }
    }
}])
.directive('notifyWhenRepeatFinished', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('repeatFinished');
                });
            }
        }
    }
}]);