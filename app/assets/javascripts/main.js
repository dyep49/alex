console.log('main')

var main = angular.module("main", ['ngResource', 'ngRoute']);


main.config(function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/splash.html',
                controller: 'SplashController'
            }).
            when('/tag/:tag_name', {
                templateUrl: 'templates/tag.html',
                controller: 'tag'
            }).
            when('/site/:source_name', {
                templateUrl: 'templates/site.html',
                controller: 'site'
            }).
            when('/pin/:pin_id', {
                templateUrl: 'templates/pin.html',
                controller: 'pin'
            }).
            otherwise({
                redirectTo: '/'
            }); // add submit pin, and look at saved pins
    } 
);

