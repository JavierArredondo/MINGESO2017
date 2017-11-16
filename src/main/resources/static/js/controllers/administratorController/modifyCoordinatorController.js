app.controller('modifyCoordinatorController', ['$scope','$http','$location', '$routeParams', function($scope,$http,$location,$routeParams) {

    $scope.title = "Home - Administrador"

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.getCoordinator = function(){
      $http.get('http://localhost:1919/teacher/' + $routeParams.idCoordinator).then(function(data) {
        $scope.coordinator = data.data;
        $scope.nameUser = $scope.coordinator.name;
        $scope.lastName = $scope.coordinator.lastName;
        $scope.email = $scope.coordinator.email;
      });
    };
    console.log($scope.nameUser);
    $scope.updateCoordinator = function() {
        var data =
            {
                "name": $scope.nameUser,
                "lastName": $scope.lastName,
                "email": $scope.email
            };
        console.log($scope.nameUser);
        console.log($scope.lastName);
        console.log($scope.email);
        $http.put('http://localhost:1919/teacher/' + $routeParams.idCoordinator, data).then(function (data) {
            window.alert("Alumno agregado correctamente.");
            go('/administrator/listCoordinator');
        }).catch(function (data) {
            window.alert("Se ha producido un error.");
        })
    };

}]);
