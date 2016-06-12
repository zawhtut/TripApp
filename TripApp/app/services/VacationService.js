app.factory('VacationService', ['$rootScope', '$http', '$q', '$window', function ($rootScope, $http, $q, $window) {

    var saveVacation = function (name) {
        var createDeferred = $q.defer();
        var vacationList = [];
        // var isLoaded = false;
        console.log(name);
        
        //console.log(JSON.stringify(model));
        //this is going to create the vacation and post it onto the databse when they save it on the home html page
        $http({
            url: '/api/apiVacation',
            method: 'POST',
            data: model,
            headers: { "Authorization": "Bearer " + $window.sessionStorage.getItem('token') }
        }).success(function (model, status) {
            createDeferred.resolve(model);
            $location.path('/MyVacations');
        }).error(function (model, status) {
            createDeferred.reject(model);
        });
        return createDeferred.promise;
    }

    //this is going to get the vacatin and display it onto the vacations html page
    var getVacationList = function (model) {
        
        var getDeferred = $q.defer();
        
        $http({
            url: 'api/apiVacation',
            method: 'GET',
            data: model,
           headers: { "Authorization": "Bearer " + $window.sessionStorage.getItem('token') }
        }).success(function (model, status) {
            vacationList = model;
            console.log(vacationList);
            getDeferred.resolve(model);
           // console.log('This is the vacation data:' + model); 
        }).error(function (data, status) {
            getDeferred.reject(data);
            console.log("There was an error with the getting the vacation.");
        })
        return getDeferred.promise;
    }

    //var index = $scope.vacationList.indexOf(vacationId);

    //var editVacation = function (index) {

    //    var putDeferred = $q.defer();
    //    var model = {
    //        'Destination Name': ''
    //    }

    //    $http({
    //        url: 'api/apiVacation',
    //        method: 'PUT',
    //        data: model,
    //        headers: { "Authorization": "Bearer " + $window.sessionStorage.getItem('token') }
    //    }).success(function (data, status) {
    //        putDeferred.resolve(data);
    //        console.log("This is the edited data:" + data);
    //    }).error(function (data, status) {
    //        console.log("There is an error with editing the vacation.");
    //        putDeferred.reject(data);
    //    })
        
    //    return putDeferred.promise;
    //}

    var deleteVacation = function (model) {

        //var model = null;

        $http({
            url: 'api/apiVacation', //
            method: 'DELETE',
            data: model,
            headers: { "Authorization": "Bearer " + $window.sessionstorage.getitem('token') }
        }).success(function (data, status) {
            
            console.log('vacation data has been deleted'); 
        }).error(function (data, status) {
           
            console.log("there was an error with the vacation api.");
        })

        return status;
    }

    return {
        
        //saveVacation: saveVacation,
        getVacationList: getVacationList,
        deleteVacation: deleteVacation
    }

}]);