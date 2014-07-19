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
            transclude: true,
            controller: function($scope) {
                $scope.cat = function(val) {
                    $scope.catval = val;
                };
                $scope.detail = function(val) {
                    $scope.detailval = val;
                };
            }
        };
    })
    .filter('itemSearch', function() {
        return function(input, query) {
            if (!query) {
                return input;
            }
            var result = [];
            angular.forEach(input, function(item) {
                if (item.name && item.name.toLowerCase().indexOf(query) !== -1) {
                    result.push(item);
                }
            });
            return result;

        };
    });
