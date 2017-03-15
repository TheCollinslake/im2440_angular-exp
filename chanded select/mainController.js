app.controller("MainController", function ($scope) {
    $scope.selectedPerson = 0;

    $scope.selectedGenre = null;

    $scope.people =[
        {id: 0, name: 'Caleb', music: ['Rock', 'Metal', 'Dubstep', 'Electro']},
        {id: 1, name: 'Kevin', music: ['Rock', 'Metal', 'Folk']}
    ];
    });