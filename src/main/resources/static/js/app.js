var app = angular.module('Myapp',['ngRoute', 'ui.codemirror']);

app.config(function($routeProvider){
    $routeProvider

        //Student

        .when('/student/coding',{
                    templateUrl: 'js/views/student/coding.html',
                    controller: 'codingViewController'
        })

        .when('/student/home',{
                    templateUrl: 'js/views/student/homeStudent.html',
                    controller: 'homeStudentController'
        })
        .when('/student/exercises',{
                    templateUrl: 'js/views/student/exercisesStudent.html',
                    controller: 'exerciseStudentController'
        })


        //Teacher

        .when('/teacher/exercises',{
                    templateUrl: 'js/views/teacher/exercises.html',
                    controller: 'homeTeacherController'
        })

        .when('/teacher/courses',{
                    templateUrl: 'js/views/teacher/listCourses.html',
                    controller: 'listCoursesController'
        })

        .when('/teacher/home',{
                    templateUrl: 'js/views/teacher/homeTeacher.html',
                    controller: 'loginController'
        })

        .when('/teacher/newStudent',{
                    templateUrl: 'js/views/teacher/newStudent.html',
                    controller: 'newStudentController'
        })

        .when('/teacher/newExercise',{
                    templateUrl: 'js/views/teacher/newExercise.html',
                    controller: 'newExerciseController'
        })

        //Coordinator

        .when('/coordinator/newExercisesCoordinator',{
                    templateUrl: 'js/views/coordinator/newExercisesCoordinator.html',
                    controller: 'newExercisesCoordinatorController'
        })

        .when('/coordinator/listTeacher',{
                    templateUrl: 'js/views/coordinator/listTeacher.html',
                    controller: 'listTeacherController'
        })

        .when('/coordinator/listStudent',{
                    templateUrl: 'js/views/coordinator/listStudent.html',
                    controller: 'listStudentController'
        })

        .when('/coordinator/homeCoordinator',{
                    templateUrl: 'js/views/coordinator/home.html',
                    controller: 'homeCoordinatorController'
        })

        //Other

        .when('/login',{
                    templateUrl: 'js/views/login.html',
                    controller: 'loginController'
        })

        .otherwise({
            redirectTo: '/index'
        });
});