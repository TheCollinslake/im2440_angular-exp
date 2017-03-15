function PeopleController($scope){

    $scope.people=[
        {
            fname: "Caleb",
            lname: "Collins",
            phone: "6418161234",
            city: "Greene",
            state: "Iowa",
            email: "lakefeb2345@gmail.com",
            gender: "M",
        },
        {
            fname: "Travis",
            lname: "Roberts",
            phone: "1234567890",
            city: "Minniapoles",
            state: "Minnasota",
            email: "travis@gmail.com",
            gender: "M",
        }
    ];

    $scope.Save = function() {
        $scope.people.push({
            fname: $scope.newPerson.fname,
            lname: $scope.newPerson.lname,
            phone: $scope.newPerson.phone,
            city: $scope.newPerson.city,
            state: $scope.newPerson.state,
            email: $scope.newPerson.email,
            gender: $scope.newPerson.gender,
        });
    }
}
