app.controller('exerciseStudentController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.go = function ( path ) {
        $location.path( path );
    };

	$scope.getExercises = function() {
    		$http.get('http://localhost:1919/exercise/all').then(function(data) {
    			$scope.exercises = data.data;
    		});	
    	};

}]);