app.controller('loginController', ['$scope','$location','$http', function($scope,$location,$http) {
    $scope.title = "Inicio de sesión";

        $scope.go = function ( path ) {
          $location.path( path );
        };

}]);