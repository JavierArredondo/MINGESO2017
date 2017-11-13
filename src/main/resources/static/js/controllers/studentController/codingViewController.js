app.controller('codingViewController', ['$scope', '$http','$location','LanguageService', function ($scope, $http,$location,LanguageService) {
    $scope.spinner = true;
    $scope.results = false;

    $scope.myCodeMirrorOptionsPython = {
        mode: LanguageService.getLanguage(),
        lineNumbers: true,
        theme: "material"
    };

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.sendCode = function () {
        var code = {
            "code": $scope.value
        };
        console.log(code);
        $http.post('/code', code).then(function (response) {
            console.log(response);
            $scope.errors = response.data.error;
            $scope.output = response.data.output;
            $scope.status = response.data.statusCode;
            console.log(status);
            $scope.spinner = false;
            $scope.results = true;
        });

    };

    $scope.resetPopup = function () {
        $scope.status = 3;
        $scope.spinner = true;
        $scope.results = false;
    }


}]);
