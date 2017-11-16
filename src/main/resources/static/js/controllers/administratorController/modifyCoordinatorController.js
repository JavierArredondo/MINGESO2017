app.controller('modifyCoordinatorController', ['$scope','$http','$location', '$routeParams', function($scope,$http,$location,$routeParams) {

    $scope.title = "Home - Administrador"

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.updateCoordinator = function() {
        var data =
            {
                "name": $scope.nameUser,
                "lastName": $scope.lastName,
                "email": $scope.email
            };
        $http.put('http://localhost:1919/teacher/' + $routeParams.idCoordinator, data).then(function (data) {
            window.alert("Se modificó correctamente.");
            go('/administrator/listCoordinator');
        }).catch(function (data) {
            window.alert("Se ha producido un error. :(");
        })
    };

    $scope.getCoordinator = function(){
      $http.get('http://localhost:1919/teacher/' + $routeParams.idCoordinator).then(function(data) {
        $scope.coordinator = data.data;
        $scope.nameUser = $scope.coordinator.name;
        $scope.lastName = $scope.coordinator.lastName;
        $scope.email = $scope.coordinator.email;
      });
    };

}]);
