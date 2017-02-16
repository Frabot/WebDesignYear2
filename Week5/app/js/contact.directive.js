angular.module('app').directive('contact', function () {
    "use strict";
    return {
        restrict: 'EA',
		scope: {
			contact: "=",
           // submitForm: "="
		},
        templateUrl: '../js/form_template.html',
        controller: function ($scope, $element) {
            //Just to try to see if it is working
           /* $scope.$watch('form.email', function() {
                if ($scope.form.email.length > 5) {
                    alert("something is happening");
                }
            });*/
            
            //For the submit button make appear an alert
            /*$scope.submitForm = function() {

                if ($scope.myForm.$valid) {
                    alert('Thank you!');
                }
            
		};*/
        }
	};
});