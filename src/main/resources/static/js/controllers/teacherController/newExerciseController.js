app.controller('newExerciseController', ['$scope','$http', function($scope,$http) {
    $scope.titl = "Home - Nuevo ejercicio"

	$scope.addExercise = function() {
    		$http.post('http://localhost:1919/exercise/new',
    			{
    				//answer: $scope.answer,
    				text: $scope.text,
    				title: $scope.title,
    			}
    		).then(function(data) {
    			window.alert("Se agregó correctamente el enunciado.");
    			$scope.title = "";
    			$scope.text = "";
    		}).catch(function(data) {
    			window.alert("Se ha producido un error.");
    		});
    	};

}]);