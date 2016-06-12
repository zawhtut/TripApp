app.controller('RegistrationController', ['$http', 'RegistrationService', '$location', '$scope', function ($http, RegistrationService, $location, $scope) {

    $scope.isLoading = function () {
        $scope.buttonText = $scope.loading ? "Processing" : "Register";
        return $scope.loading;
    };
    $scope.processRegistration = function () {
        $scope.loading = !$scope.loading;
        return RegistrationService.processRegistration($scope.email, $scope.password, $scope.passwordCheck)
            .then(function () {
                /* on success */
                //$scope.loading = !$scope.loading;
                $location.path('/Login');
                //toaster.pop("success", "Registration Success", "You are now a registred user. Welcome " + $scope.username + "!");
            },
            function () {
                /* on error */
                //$scope.loading = !$scope.loading;
                //toaster.pop("error", "Registration Failed", "The username: " + $scope.username + " is taken, please select another one.");
            })
    }
}]);