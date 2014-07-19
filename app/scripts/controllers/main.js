'use strict';

angular.module('ngDirectiveApp')
  .controller('MainCtrl', function ($scope,$http,$log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data.json').then(function(res){
        var contents = res.data;
        $log.info(contents);
        var mapobj = {};
        mapobj.keys = Object.keys(contents.map);
        mapobj.values = contents.map;
        $scope.mapobj= mapobj;
    });
  });
