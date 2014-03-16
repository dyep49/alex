var main = angular.module('main', ['ngRoute', 'mainControllers'])

main.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'template/splash.html',
                controller: 'splash'
            }).
            when('/tag/:tag_name', {
                templateUrl: 'template/tag.html',
                controller: 'tag'
            }).
            when('/site/:source_name', {
                templateUrl: 'template/site.html',
                controller: 'site'
            }).
            when('/pin/:pin_id', {
                templateUrl: 'template/pin.html',
                controller: 'pin'
            }).
            otherwise({
                redirectTo: '/'
            }); // add submit pin, and look at saved pins
    } 
]);

