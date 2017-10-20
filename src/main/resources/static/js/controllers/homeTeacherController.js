app.controller('homeTeacherController', ['$scope','$http', function($scope,$http) {
    $scope.title = "Home - Profesor"

    $scope.navigation = [
	    {"text":"Cerrar sesión",   "link":"#!/index", "condition":$scope.typePage}
	];

}]);