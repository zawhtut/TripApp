app.controller('HomePageController', ['$scope', '$rootScope', '$http', 'SearchService',  function ($scope, $rootScope, $http, SearchService) {

    $scope.search = function () {
        $rootScope.data1 = {};
        $rootScope.data2 = {};
        $rootScope.loc = $scope.city;
        
        return SearchService.search().then(function (data) {
            $scope.date = new Date();

           // $scope.forecast = $rootScope.data1.list;
            $scope.name = $rootScope.data1.city.name;
            $scope.lat = $rootScope.data1.city.coord.lat;
            $scope.lon = $rootScope.data1.city.coord.lon;
           // console.log($rootScope.data1.list);
            //for (x in $rootScope.data2.results) {
            //    if ($rootScope.data2.results[x].photos != null) {
            //        //console.log($rootScope.data2.results[x]);
                        
            //        placesList.push($rootScope.data2.results[x]);
            //    }
            //}
            //console.log($rootScope.data2);
            $scope.places = $rootScope.data2;
            console.log(places);

            //  console.log($rootScope.data1.list);
           
            


        }, function (data) {
            console.log("There is an error with the Weather data.");
        });

    }

   $scope.addVacay = function (name) {
       console.log(name);
       //var model = {
       //    "DestinationName": name
       //};
       //console.log(model);
       return SearchService.saveVacation(name).then(function ()
       { 

       } );
    }

}]);
    