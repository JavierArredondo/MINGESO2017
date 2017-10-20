var app = angular.module('Myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
                    templateUrl: 'js/views/login.html',
                    controller: 'loginController'
        })
        .when('/homeStudent',{
                    templateUrl: 'js/views/student/home.html',
                    controller: 'homeStudentController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});