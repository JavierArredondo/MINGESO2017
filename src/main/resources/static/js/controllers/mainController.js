app.controller('mainController', ['$scope','$location','userService','GooglePlus','$http', function($scope,$location,userService,GooglePlus,$http) {

	$scope.title = "Home";

    $scope.login = $location.path() === '/login';
    $scope.home = $location.path() === '/home';

	$location.path('/login');

	$scope.session = false;

	$scope.accessToken = "";
	$scope.error = false;
	$scope.image = null;
	$scope.name = null;
	$scope.role = null;

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

	$scope.login = function () {
		$scope.error = false;
		GooglePlus.login().then(function (authResult) {
			console.log(authResult);
			GooglePlus.getUser().then(function (user) {
				console.log(user);
				if(user.hd == 'usach.cl'){
					//Aqui deberia ir otro if verificando que exista en el sistema
					$scope.session = true;
					$scope.image = user.picture;
					$scope.name = $scope.capitalize(user.name);
					//Aqui deberia ir un servicio para consultar el rol basado en el mail
					userService.setUser(user.email, $scope.capitalize(user.name), user.hd, user.id, user.picture,'student');
					if(userService.getUser().role == 'student'){
						$scope.role = 'Estudiante';
						$scope.home = '/student/home';
						$location.path('/student/home');
					}
					else if(userService.getUser().role == 'teacher'){
						$scope.role = 'Profesor';
						$scope.home = '/teacher/home';
						$location.path('/teacher/home');
					}
					else if(userService.getUser().role == 'coordinator'){
						$scope.role = 'Coordinador';
						$scope.home = '/coordinator/home';
						$location.path('/coordinator/home');
					}
					else if(userService.getUser().role == 'administrator'){
						$scope.role = 'Administrador';
						$scope.home = '/administrator/home';
						$location.path('/administrator/home');
					}

				}
				else{
					$scope.error = true;
					$http({
						method: 'GET',
						url: 'https://accounts.google.com/o/oauth2/revoke?token=' + GooglePlus.getToken().access_token
					});
					GooglePlus.setToken(null);
					GooglePlus.logout();
				}

			});
		}, function (err) {
			console.log(err);
		});
	};

	$scope.logout = function(){
		$scope.session = false;
		$http({
			method: 'GET',
			url: 'https://accounts.google.com/o/oauth2/revoke?token=' + GooglePlus.getToken().access_token
		});
		GooglePlus.setToken(null);
		GooglePlus.logout();
		$scope.image = null;
		$scope.name = null;
		$scope.role = null;
		$scope.home = '/login';
		$location.path('/login');
	};

	$scope.logout2 = function(){
		GooglePlus.logout();
	};

	$scope.capitalize = function toTitleCase(str)
	{
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};

	$scope.navigation = [
	{"text":"Iniciar sesión",   "link":"#!/login", "condition": $scope.login , },
	];
}]);