app.controller('newExerciseController', ['$scope','$http', function($scope,$http) {
    $scope.titl = "Home - Nuevo ejercicio"

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




