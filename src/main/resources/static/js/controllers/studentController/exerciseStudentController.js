app.controller('exerciseStudentController', ['$scope','$http', function($scope,$http) {

	$scope.getExercises = function() {
    		$http.get('http://localhost:1919/exercise/all').then(function(data) {
    			$scope.exercises = data.data;
    		});	
    	};

}]);