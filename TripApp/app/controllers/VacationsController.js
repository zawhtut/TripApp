//creating a controller which controls the vacations displayed
app.controller('VacationsController', ['$scope', '$http', 'VacationService', function ($scope, $http, VacationService) {
   // $scope.vacation = data;
    //var index = $scope.VacationList(vacationId);

    $scope.saveVacation = function (z) {
        console.log("This is our vacation:" + z);
        return VacationService.saveVacation(z).then(function () {

        });



        //    .then(function (data) {
        //    $location.path('/MyVacations');    
        //}), function () {
        //    console.log("There is an error in vacation controller.");
        }
    


    $scope.loadVacation = function() {
        var vacationList = [];
        // console.log(name);
        //identifying what index of the vacation is so the user can edit it or delete it
        return VacationService.getVacationList().then(function (data) {
            //Resolve or 'success'/ok callback
            // $scope.isInitialized = $scope.isAuthenticated = true;
            $scope.vacationList = data;
            console.log('This is the vacation data:' + data);
            //for (var i in data) {
            //    $scope.total += (data[i].itemPrice * data[i].quantity);
            //}
        }, function (data) {
            //    $scope.isInitialized = true;
            //    $scope.isAuthenticated = false;
            //Reject or error callback
        });
    }

    //$scope.editVacation = function (index) {
    //    return VacationService.editVacation(model).then(function (status) {
    //        console.log("Vacation has been edited");
    //    })
    //}
    ////have user delete vacation
    $scope.deleteVacation = function (name) {
        //var model = {
        //    "DestinationName": name
        //}
        //console.log(name);
        //console.log(model);
        //console.log(model.DestinationName);
        //return VacationService.deleteVacation(model).then(function (status) {
        //    console.log("Vacation has been deleted");
        //})
    }
    }]);