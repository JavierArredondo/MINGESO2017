app.controller('newStudentController', ['$scope','$http', function($scope,$http) {
    $scope.title = "Home - Nuevo estudiante"

    $scope.addStudent = function() {
    		$http.post('http://localhost:1919/student/new',
    			{
    				name: $scope.name,
    				rut: $scope.rut,
    				email: $scope.email,
    				password: $scope.password,
    				//id_coordination: $scope.id_coordination
    			}
    		).then(function(data) {
    			$scope.msg = 'Estudiante Creado Correctamente';
    			//$scope.getStudents();
                $scope.limpiar();
    		}).catch(function(data) {
    			$scope.msg = 'Se ha producido un error';
    		});

    		
    	};

}]);