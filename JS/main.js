var myApp = angular.module("myApp", []) ;

myApp.controller("myController", function($scope){
    console.log("In myContoller");

    $scope.newUser = {};
    $scope.editUser = {};
    $scope.message = "";

    // name , email, DOB, medecine, country
    $scope.users = [
        {
            name: "John Doe", 
            email: "john@example.com", 
            dob:"11/02/1992",
            age:"28",
            medecine: "orrofarXT",
            country: "India"
        },
        {
            name: "Mary Moe", 
            email: "mary@example.com", 
            dob:"11/02/1986",
            age:"34",
            medecine: "PantocidDSR",
            country: "USA"
        },
        {
            name: "July Dooley", 
            email: "july@example.com", 
            dob:"11/02/1952",
            age:"68",
            medecine: "celcolOS",
            country: "Canada"
        }
    ]

    $scope.saveUser = function(){
        console.log($scope.newUser);
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added Successfully!!!";
         
    };

    $scope.selectUser = function(user){
        console.log(user);
        $scope.editUser = user;
    };

    $scope.updateUser = function(){
        $scope.message = "User updated Successfully !!!";
    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.editUser), 1);
        $scope.message = "User Deleted Successfully !!!";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    }


});