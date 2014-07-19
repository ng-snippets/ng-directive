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
            // replace: 'true',
            templateUrl: 'views/mainpage.html',
            transclude : true,
            controller: function($scope, $log) {
                $scope.cat = function(val) {
                    $log.info(val);
                    $scope.catval = val;
                };
                $scope.detail = function(val) {
                    $scope.detailval = val;
                };
            }
        };
    });
