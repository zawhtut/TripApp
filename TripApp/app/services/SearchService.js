app.factory('SearchService', ['$http', '$q', '$rootScope', '$window', function ($http, $q, $rootScope, $window) {


    var search = function () {
        //var deferredSearch = $q.defer();
        var weatherDeferred = $q.defer();
        var placesList = [];
        if ($rootScope.loc == undefined) {
            $rootScope.loc = 'Oakland';
            
        }
        
        //$rootScope.bigData.length = 0;
        $http({
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $rootScope.loc + '&mode=json&units=metric&cnt=6',
            method: 'GET'
        }).success(function (data) {
            //console.log(data);
            $rootScope.data1 = data;
            //   weatherDeferred.resolve(data);
            //$rootScope.bigData.push(data);
            // console.log($rootScope.data1);
        }).error(function (data) {
            //  weatherDeferred.reject(data);
            console.log("There is an error with weather api.");
        })


        //var googlePlacesDeferred = $q.defer();
        $http({
            url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?&query="tourist attractions in ' + $rootScope.loc + '"&key=AIzaSyBSGgONVYb7BNKoRnTbhm1PAMg_pSjSf0o',
            //AIzaSyCDstPOkjTtUV16-Bib2K8j9__QDx9ERcA
            //AIzaSyDbszI8Gfk1cwKbHfq87Ho9Yl2vv_6fMN0
            //AIzaSyDIzRY2A-mkripBJFmNnyl_0mSJ4oSoeMc
            //AIzaSyBKLw7xomUeuWhxLC9L71lfCBuamTI9K58
            method: 'GET'
        }).success(function (data) {
            //console.log(data.results);
            for (x in data.results) {
                if (data.results[x].photos != null) {
                    //console.log(data.results[x]);

                    placesList.push(data.results[x]);
                }
            }
            //if (placeList.length > 4)
            //{
                $rootScope.data2 = placesList.slice(0, 16);
            //} else
            //{
            //    $rootScope.data2 = placesList.slice(0, 4);
            //}

            //googlePlacesDeferred.resolve(data);
            //$rootScope.bigData.push(data2);
            //console.log($rootScope.data2);
            //console.log(data);
        }).error(function (data) {
            //googlePlacesDeferred.reject(data);
            console.log("There is an error with the googlePlaces api.");
        })


        //return googlePlacesDeferred.promise;
        return weatherDeferred.promise;
        //var googleMapsDeferred = $q.defer();
        //$http({
        //    url: 'http://maps.googleapis.com/maps/api/staticmap?center=' + $rootScope.loc + '&zoom=14&size=512x512&maptype=roadmap&markers=color:blue%7clabel:s%7c40.702147,-74.015794&markers=color:green%7clabel:g%7c40.711614,-74.012318&markers=color:red%7ccolor:red%7clabel:c%7c40.718217,-73.998284&sensor=false&key=AIzaSyBSGgONVYb7BNKoRnTbhm1PAMg_pSjSf0o',
        //    method: 'GET'
        //}).success(function (data) {
        //    //googleMapsDeferred.resolve(data);
        //    $rootScope.bigData.push(data);
        //    //console.log(data);
        //}).error(function (data) {
        //    //googleMapsDeferred.reject(data);
        //    console.log("There is an error with the googleMaps api.")
        //});
        //return googleMapsDeferred.promise;
        //console.log($rootScope.bigData);
        //search = $rootScope.bigData;
    }

    var saveVacation = function (name) {
        var createDeferred = $q.defer();
        var vacationList = [];
        // var isLoaded = false;
        var model = {
            "DestinationName": name
        }
        //this is going to create the vacation and post it onto the databse when they save it on the home html page
        $http({
            url: 'api/apiVacation',
            method: 'POST',
            data: model,
            headers: { "Authorization": "Bearer " + $window.sessionStorage.getItem('token') }
        }).success(function (model, status) {
            createDeferred.resolve(model);
            // $location.path('/MyVacations');
        }).error(function (model, status) {
            //createDeferred.reject(model);
        })
        return createDeferred.promise;
    }

    return {
        search: search,
        saveVacation : saveVacation
    }
}]);


//$rootScoop.bigData.length = 0;

