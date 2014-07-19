var app = angular.module("myApp",[])
app.controller("HomeController", function ($scope ){
    $scope.name = "World" ;
    
});

app.controller("NumController", function ($scope ){
    $scope.num = 1;
    $scope.increment = function(){
        $scope.num = $scope.num +1 ;
    }
});


app.config(function($routeProvider){
    $routeProvider.when("/" , { templateUrl : "home.html", controller: "HomeController"});
    $routeProvider.when("/num" , { templateUrl : "num.html", controller: "NumController"});
    $routeProvider.otherwise({redirectTo:"/"});
});
