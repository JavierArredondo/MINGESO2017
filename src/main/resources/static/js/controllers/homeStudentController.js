app.controller('homeStudentController', ['$scope','$http', function($scope,$http) {
    $scope.navigation = [
	    {"text":"Iniciar sesión",   "link":"#!/login", "condition":$scope.typePage}
	];

}]);