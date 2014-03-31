main.directive('bxSlider', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$on('repeatFinished', function () {
                console.log("ngRepeat has finished");
                scope.currentSlider ++
                if(scope.currentSlider <= scope.total){
                element.bxSlider(scope.$eval('{' + attrs.bxSlider + '}'));
                }
            });
        }
    }
}])
.directive('notifyWhenRepeatFinished', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                console.log('test')
                $timeout(function () {
                    scope.$emit('repeatFinished');
                });
            }
        }
    }
}]);


// main.directive('bxSlider', [function () {
//     return {
//         restrict: 'A',
//         link: function (scope, element, attrs) {
//             scope.$on('repeatFinished', function () {
//                 console.log("ngRepeat has finished");
//                 element.bxSlider(scope.$eval('{' + attrs.bxSlider + '}'));
//                 for(i=1; i<$('.saves').find('.bx-next').length; i++){
//                     $('.saves').find('.bx-next').last().remove()
//                 }
//                 for(i=1; i<$('.history').find('.bx-next').length; i++){
//                     $('.history').find('.bx-next').last().remove()
//                 }
//                 for(i=1; i<$('.shares').find('.bx-next').length; i++){
//                     $('.shares').find('.bx-next').last().remove()
//                 }
//             });
//         }
//     }
// }])