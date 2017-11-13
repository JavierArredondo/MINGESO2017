app.controller('mainController', ['$scope','$location','userService', function($scope,$location,userService) {

	$scope.title = "Home";

    $scope.login = $location.path() === '/login';
    $scope.home = $location.path() === '/home';

	$location.path('/login');

	$scope.session = false;

	$scope.homerole = function(){
		if(userService.getUser().role == 'student'){
			$scope.home = '/student/home';
		}
		else if(userService.getUser().role == 'teacher'){
			$scope.home = '/teacher/home';
		}
		else if(userService.getUser().role == 'coordinator'){
			$scope.home = '/coordinator/home';
		}
		else if(userService.getUser().role == 'administrator'){
			$scope.home = '/administrator/home';
		}
		else{
			$scope.home = '/login';
		}
	};
	$scope.homerole();

	$scope.navigation = [
	{"text":"Iniciar sesión",   "link":"#!/login", "condition": $scope.login , },
	];
}]);