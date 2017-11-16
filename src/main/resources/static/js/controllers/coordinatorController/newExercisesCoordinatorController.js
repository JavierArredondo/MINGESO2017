app.controller('newExercisesCoordinatorController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.title = "Home - Coordinador"

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.addExercise = function() {
              var d = {
                  "answer": $scope.answer,
                  "text": $scope.text,
                  "title": $scope.otro
              }
              console.log(d);
      		$http.post('http://localhost:1919/exercise/new', d)
              .then(function(data) {
      			window.alert("Se agregó correctamente el enunciado.");
      			$scope.otro = "";
      			$scope.text = "";
            $scope.answer = "";
      		}).catch(function(data) {
      			window.alert("Se ha producido un error.");
      		});
      	};

}]);
