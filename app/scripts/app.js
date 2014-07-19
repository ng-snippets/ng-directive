'use strict';

angular
    .module('ngDirectiveApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .directive('mainPage', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            templateUrl: 'views/mainpage.html'
        };
    });
