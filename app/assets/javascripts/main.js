var main = angular.module('main', ['ngRoute'])

main.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/test', {
                templateUrl: 'test.html',
                controller: 'test'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

main.controller('test', function($scope) {
  $scope.array = [1,2,3, "sdfds"];
});

