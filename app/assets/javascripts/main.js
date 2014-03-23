var main = angular.module("main", ['ngResource', 'ngRoute', 'infinite-scroll']);

main.config([   "$httpProvider", function(provider) {  return provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');   } ]);

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
            when('/source/:source_name', {
                templateUrl: 'templates/source.html',
                controller: 'SourceController'
            }).
            when('/pin/:pin_id', {
                templateUrl: 'templates/pin.html',
                controller: 'PinController'
            }).
            when('/pins/new', {
                templateUrl: 'templates/new_pin.html',
                controller: 'NewPinController'
            }).
            when('/sources/new', {
                templateUrl: 'templates/new_source.html',
                controller: 'NewSourceController'
            }).
            when('/search', {
                templateUrl: 'templates/search.html',
                controller: 'SearchController'
            }).
            when('/inbox', {
                templateUrl: 'templates/inbox.html',
                controller: 'InboxController'
            }).            
            when('/favorites', {
                templateUrl: 'templates/favorites.html',
                controller: 'FavoritesController'
            }).
            when('/dash', {
                templateUrl: 'templates/dash.html',
                controller: 'DashController'
            }).           
            otherwise({
                redirectTo: '/'
            });
    } 
);

