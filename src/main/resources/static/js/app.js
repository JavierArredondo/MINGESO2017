var app = angular.module('Myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
                    templateUrl: 'js/views/login.html',
                    controller: 'LoginController'
        })
        .when('/homeTeacher',{
                    templateUrl: 'js/views/Teacher/homeTeacher.html',
                    controller: 'homeTeacherController'
        })
        .when('/homeStudent',{
                    templateUrl: 'js/views/Srudent/homeStudent.html',
                    controller: 'homeStudentController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});