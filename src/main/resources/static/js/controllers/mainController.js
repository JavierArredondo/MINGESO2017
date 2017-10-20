app.controller('mainController', ['$scope','$location', function($scope,$location) {

	$scope.title = "Home";

    $scope.login = $location.path() === '/login';

	$scope.navigation = [
	{"text":"Iniciar sesión",   "link":"#!/login", "condition": $scope.login},
	];
}]);