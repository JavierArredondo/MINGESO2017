app.controller('loginController', ['$scope','$location','$http', 'GooglePlus','userService', function($scope,$location,$http,GooglePlus,userService) {
    $scope.title = "Inicio de sesión";

    $scope.go = function ( path ) {
         $location.path( path );
    };




}]);