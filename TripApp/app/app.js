//this particular js file connects the controllers we make with our views that we make

var app = angular.module('TripApp', ['ngRoute', 'google.places', 'ui.bootstrap']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/app/views/HomePage.html',
        controller: 'HomePageController',
    }).when('/Home', {
        templateUrl: '/app/views/HomePage.html',
        controller: 'HomePageController'
    })
    .when('/MyProfile', {
        templateUrl: '/app/views/ProfilePage.html',
        controller: 'UsersController',
        controller: 'FriendsController'
    })
    .when('/MyVacations', {
        templateUrl: '/app/views/VacationsPage.html',
        controller: 'VacationsController'
    })
    .when('/ContactUs', {
        templateUrl: '/app/views/ContactUsPage.html',
        controller: 'ContactUsController'
    }).when('/Login', {
        templateUrl: '/app/views/LoginPage.html',
        controller: 'LoginController'
    }).when('/Registration', {
        templateUrl: '/app/views/RegistrationPage.html',
        controller: 'RegistrationController'
    });

    $httpProvider.interceptors.push('AuthService');
}]);