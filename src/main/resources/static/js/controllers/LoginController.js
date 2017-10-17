app.controller('HomeController', ['$scope','$http', function($scope,$http) {

    $scope.login = $location.path() === '/login';

    $scope.send = function(){

        $http.post('/login',login)
                        .then(function(response){
                        });
    }
}
