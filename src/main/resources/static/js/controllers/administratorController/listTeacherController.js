app.controller('listTeacherController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.title = "Home - Administrador"

    $scope.go = function ( path ) {
        $location.path( path );
    };

}]);