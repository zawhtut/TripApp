app.controller('MenuController', ['$scope', 'LoginService', '$location', function ($scope, LoginService, $location) {
    $scope.username = '';
    $scope.isLoggedIn = function () {
        $scope.username = LoginService.isLoggedIn();
        return $scope.username;
    }

    $scope.logout = function () {
        LoginService.logout();
        $location.path('/');
    }
}]);