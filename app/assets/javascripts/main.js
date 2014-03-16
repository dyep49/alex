var main = angular.module('main', ['ngRoute', 'mainControllers'])

main.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'splash.html',
                controller: 'splash'
            }).
            when('/tag/:tag_name', {
                templateUrl: 'tag.html',
                controller: 'tag'
            }).
            when('/site/:source_name', {
                templateUrl: 'site.html',
                controller: 'site'
            }).
            when('/pin/:pin_id', {
                templateUrl: 'pin.html',
                controller: 'pin'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

