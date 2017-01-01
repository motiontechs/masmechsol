(function () {
    var masmechsolApp = angular.module('masmechsolApp.controllers', []);


    masmechsolApp.controller('mainCtrl', function ($scope, $timeout, cfpLoadingBar) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    masmechsolApp.controller('aboutController', function ($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    masmechsolApp.controller('ContactCtrl', function ($scope, $http) {
        $scope.contact = {};

        $scope.fnSubmit = function () {

            if ($scope.frmContact.$valid) {
                alert('Hi');
            }
            else {
                alert('Please fill all the Required fields!');
            }
        };

        $scope.fnReset = function () {
        };
    });
})();