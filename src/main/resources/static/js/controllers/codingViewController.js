
app.controller('codingViewController', ['$scope', '$http', function ($scope, $http) {

    $scope.myCodeMirrorOptions = {
        mode: "python",
        lineNumbers: true,
        theme: "base16-light",
        value: "Escriba aquí su código..."
    };

    $scope.sendCode = function () {
        var code = {
            "code": $scope.value
        };
        console.log(code);
        $http.post('/code', code).then(function (response) {
            console.log(response);
            var status = response.status;
            console.log(status);
        });

    }


}]);



