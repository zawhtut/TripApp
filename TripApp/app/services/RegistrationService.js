﻿app.factory('RegistrationService', ['$http', '$q', function ($http, $q) {
    var processRegistration = function (email, password, passwordCheck) {
        var deffered = $q.defer();
        var model = {
            "Email": email,
            "Password": password,
            "ConfirmPassword": passwordCheck
        }

        console.log(JSON.stringify(model));
        $http({
            url: "/api/Account/Register",
            method: "POST",
            data: model
        }).success(function (data) {
            deffered.resolve(data);
        }).error(function (data) {
            deffered.reject(data);
        })
        return deffered.promise;
    }
    return {
        processRegistration: processRegistration
    }
}]);