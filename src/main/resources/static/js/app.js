var app = angular.module('Myapp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
                    templateUrl: 'js/views/login.html',
                    controller: 'loginController'
        })
        .when('/student/home',{
                    templateUrl: 'js/views/student/home.html',
                    controller: 'homeStudentController'
        })
        .when('/student/exercise',{
                    templateUrl: 'js/views/student/exercises.html',
                    controller: 'exerciseStudentController'
        })
        .when('/teacher/home',{
                    templateUrl: 'js/views/teacher/home.html',
                    controller: 'homeTeacherController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});