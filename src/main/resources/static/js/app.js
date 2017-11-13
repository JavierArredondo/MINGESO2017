var app = angular.module('Myapp',['ngRoute', 'ui.codemirror', 'googleplus']);

app.config(['GooglePlusProvider', function(GooglePlusProvider) {
    GooglePlusProvider.init({
        clientId: '401475042622-io17gpkn0aqungvhhm9mfnitc3ls5jh3.apps.googleusercontent.com',
        apiKey: 'XBpM08bYtNfDvY45D4ITlxAz',
        hostedDomain: 'usach.cl'
    });

}]);

app.factory('userService',['$rootScope',function($rootScope){
    var user = {};
    return {
        getUser : function () {
            return user;
        },

        setUser : function (email, name, hd, id, picture, role) {
            user.email = email;
            user.name = name;
            user.hd = hd;
            user.id = id;
            user.picture = picture;
            user.role = role;
        }
    }
}]);



app.config(function($routeProvider){
    $routeProvider

        //Student
        .when('/student/home',{
            templateUrl: 'js/views/student/homeStudent.html',
            controller: 'homeStudentController'
        })

        .when('/student/coding',{
                    templateUrl: 'js/views/student/coding.html',
                    controller: 'codingViewController'
        })

        .when('/student/exercisesStudent',{
                    templateUrl: 'js/views/student/exercisesStudent.html',
                    controller: 'exerciseStudentController'
        })


        //Teacher
        .when('/teacher/home',{
            templateUrl: 'js/views/teacher/homeTeacher.html',
            controller: 'homeTeacherController'
        })

        .when('/teacher/exercises',{
                    templateUrl: 'js/views/teacher/exercises.html',
                    controller: 'exercisesController'
        })

        .when('/teacher/listCourses',{
                    templateUrl: 'js/views/teacher/listCourses.html',
                    controller: 'listCoursesController'
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
        .when('/coordinator/home',{
            templateUrl: 'js/views/coordinator/homeCoordinator.html',
            controller: 'homeAdministratorController'
        })

        .when('/coordinator/newExercises',{
                    templateUrl: 'js/views/coordinator/newExercisesCoordinator.html',
                    controller: 'newExercisesCoordinatorController'
        })

        .when('/coordinator/newTeacher',{
                    templateUrl: 'js/views/coordinator/newTeacher.html',
                    controller: 'newTeacherController'
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

        //Administrator
        .when('/administrator/home',{
                    templateUrl: 'js/views/administrator/homeAdmin.html',
                    controller: 'homeAdministratorController'
        })

        .when('/administrator/modifyCoordinator',{
                    templateUrl: 'js/views/administrator/modifyCoordinator.html',
                    controller: 'modifyCoordinatorController'
        })

        .when('/administrator/modifyStudent',{
                    templateUrl: 'js/views/administrator/modifyStudent.html',
                    controller: 'modifyStudentController'
        })

        .when('/administrator/modifyTeacher',{
                    templateUrl: 'js/views/administrator/modifyTeacher.html',
                    controller: 'modifyTeacherController'
        })

        .when('/administrator/newUser',{
                    templateUrl: 'js/views/administrator/newUser.html',
                    controller: 'newUserController'
        })

        .when('/administrator/listCoordinator',{
                    templateUrl: 'js/views/administrator/listCoordinator.html',
                    controller: 'listCoordinatorController'
        })

        .when('/administrator/listStudent',{
                    templateUrl: 'js/views/administrator/listStudent.html',
                    controller: 'listStudentController'
        })

        .when('/administrator/listTeacher',{
                    templateUrl: 'js/views/administrator/listTeacher.html',
                    controller: 'listTeacherController'
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