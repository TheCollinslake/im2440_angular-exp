var app = angular.module("mainApp",['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents',{
            templateUrl: 'viewStudents.html',
            controller: 'StudentController'
        })
        .otherwise({
            redirectTo: '/home'
        });

});

app.controller('StudentController', function ($scope){
    $scope.students =[
        {name: 'Cale Collins', city: 'Greene'},
        {name: 'Calvin Bast', city: 'Hastings'},
        {name: 'Kevin Rirmin', city: 'Paris'},
        {name: 'Travis Roberts', city: 'Wisconsin'}
    ];
    $scope.message = "Click on the link to view the list of all our students.";
});

