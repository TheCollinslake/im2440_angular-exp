/**
 * Created by stu on 3/9/17.
 */
var app = angular.module("myApp",[]);
app.controller("PeopleCtrl", function ($scope){
    $scope.people = [
        {
            first:"Nikolai",
            middle:"A",
            last:"Langlois",
            gender:"M",
        },
        {
            first:"Steven",
            middle:"R",
            last:"Wietecha",
            gender:"M",
        },
        {
            first:"Calvin",
            middle:"M",
            last:"Bast",
            gender:"M",
        },
        {
            first:"Travis",
            middle:"E",
            last:"Roberts",
            gender:"M",
        },
        {
            first:"Caleb",
            middle:"J",
            last:"Collins",
            gender:"M",
        },
    ];
});