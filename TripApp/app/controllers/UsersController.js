app.controller('UsersController', ['$scope', function ($scope) {
    //create an array of users
    $scope.Users = [];
    $scope.User = {};
    //creating function to add a user
    $scope.AddUser = function () {

        //instantiating newUser object with properties we want user to have
        var newUser = { UserName: $scope.UserName, FirstName: $scope.FirstName, LastName: $scope.LastName }

        return $scope.User;
        //pushing the new User added to the array
        $scope.Users.push(newUser);
    };

    //creating function to edit user 
    $scope.EditUser = function (index) {
        $scope.Users[index].UserName = $scope.Users[index].UserName;
        $scope.Users[index].FirstName = $scope.Users[index].FirstName;
        $scope.Users[index].LastName = $scope.Users[index].LastName;

    };

    //creating function to delete user
    $scope.DeleteUser = function (index) {
        var index = $scope.User.indexOf(UserId);
        $scope.Users.splice(index, 1);
    };

}]);