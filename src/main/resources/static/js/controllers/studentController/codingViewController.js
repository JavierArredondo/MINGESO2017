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
            "lang": null,
            "code": $scope.value
        };

        switch(LanguageService.getLanguage()){
            case "python":
                code.lang = "Python";
                break;
            case "text/x-java":
                code.lang = "Java";
                break;
            case "text/x-csrc":
                code.lang = "C";
                break;
            default:
                break;
        }

        console.log(code);
        $http.post('http://207.154.197.207:1313/code', code).then(function (response) {
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
