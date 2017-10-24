app.controller('homeStudentController', ['$scope','$http', function($scope,$http) {

    $scope.title = "Home - Estudiante"

    $scope.loginStudent = $location.path() === '/student/home';

    $scope.navigation = [
	    {"text":"Cerrar sesion",   "link":"#!/login", "condition": $scope.loginStudent}
	];

}]);