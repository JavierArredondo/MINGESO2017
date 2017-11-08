app.controller('newStudentController', ['$scope','$http','$location', function($scope,$http,$location) {
    $scope.title = "Home - Nuevo estudiante"

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.addStudent = function() {
            var d =
            {
                "name": $scope.name,
                "lastName": $scope.lastName,
                "rut": $scope.rut,
                "email": $scope.email,
                "password": $scope.password
                //"id_coordination": $scope.id_coordination
            };
    		$http.post('http://localhost:1919/student/new', d).then(function(data) {
    			window.alert("Alumno agregado correctamente.");
                $scope.name = "";
                $scope.rut = "";
                $scope.email = "";
                $scope.password = "";
                $scope.lastName= "";
    		}).catch(function(data) {
    			window.alert("Se ha producido un error.");
    		});

    $scope.rutCompleter = function () {
            var rut_input =$scope.rut;
            var rut = rut_input.value.replace(/[^0-9]/g, '');
            var rut_format = '';
            var last = rut.length - 1;
            for(var i = last; i >= 0; i--) {
                rut_format = rut[i] + rut_format;
                if(i == last)
                    rut_format = '-' + rut_format;
                else if((last - i) % 3 == 0)
                    rut_format = '.' + rut_format;
            }
            rut_input.value = rut_format;
        };

    		
    };



}]);