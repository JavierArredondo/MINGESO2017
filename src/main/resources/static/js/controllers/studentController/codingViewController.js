app.controller('codingViewController', ['$scope', '$http','$location', function ($scope, $http,$location) {
    $scope.lang = 1;
    $scope.spinner = true;
    $scope.results = false;

    $scope.myCodeMirrorOptionsPython = {
        mode: "python",
        lineNumbers: true,
        theme: "material",
        value: "Escriba aquí su código..."
    };

    $scope.myCodeMirrorOptionsC = {
        mode: "clike",
        lineNumbers: true,
        theme: "material",
        value: "Escriba aquí su código..."
    };

    $scope.myCodeMirrorOptionsJava = {
        mode: "text/x-java",
        lineNumbers: true,
        theme: "material",
        value: "Escriba aquí su código..."
    };

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.setLang = function(lang){
        $scope.lang = lang;
    }

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

    }

    $scope.resetPopup = function () {
        $scope.status = 3;
        $scope.spinner = true;
        $scope.results = false;
    }


}]);
