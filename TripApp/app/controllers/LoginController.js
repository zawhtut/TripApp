app.controller('LoginController', ['$scope', '$http', 'LoginService', '$location', function ($scope, $http, LoginService, $location) {
    //$scope.isLoading = function () {
    //    $scope.buttonText = $scope.loading ? "Processing" : "Login";
    //    return $scope.loading;
    //};
    $scope.processLogin = function () {
        //$scope.loading = !$scope.loading;
        console.log($scope.username);
        console.log($scope.password);
        return LoginService.processLogin($scope.username, $scope.password)
            .then(function (username) {
                /* on success */
                $scope.loading = !$scope.loading;
                //toaster.pop("success", "Login Successful", "Welcome back, " + $scope.username + ".")
                $location.path('/');
            },
            function () {
                /* on error */
                //$scope.errorMessage = data.error_description;
                $scope.loading = !$scope.loading;
                //toaster.pop("error", "Login Unsuccessful", "Invalid username or password.")
            })
    }
}]);