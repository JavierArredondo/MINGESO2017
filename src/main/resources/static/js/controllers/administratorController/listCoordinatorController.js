app.controller('listCoordinatorController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.title = "Home - Administrador";

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.getCoordinares = function() {
    		$http.get('http://localhost:1919/teacher/allCoordinares').then(function(data) {
    			$scope.coordinares = data.data;
    		});
    	};
    $scope.delCoordinator = function(id) {
      	$http.delete('http://localhost:1919/teacher/' + id).then(function(data) {});
        window.location.reload();
      };
    $scope.goTo2 = function(idCoordinator) {
      console.log("hola1");
      $location.url('/administrator/modifyCoordinator/' + idCoordinator);
      console.log("hola2");
    };

    $scope.hola = function(){
      console.log("hola");
    };

}]);
