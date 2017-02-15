angular.module('app').directive('contact', function () {
    "use strict";
    return {
        restrict: 'EA',
		scope: {
			contact: "=",
           // submitForm: "="
		},
        template: ` <form class="form-horizontal" name="myForm" novalidate>
                                  <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email:</label>
                                    <div class="col-sm-4">
                                      <input type="email" class="form-control" id="email" name="email" ng-model="email"  placeholder="Enter email" required>
                                    <p ng-show="myForm.email.$invalid && !myForm.email.$pristine">Please enter a valid email.</p>
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <label class="control-label col-sm-2" >First Name:</label>
                                    <div class="col-sm-4"> 
                                      <input type="text" class="form-control" id="fn" name="fname" placeholder="Enter First Name">
                                    <p ng-show="myForm.fname.$invalid && !myForm.fname.$pristine">Please enter your first name correctly.</p>
                                    </div>
                                  </div>
                                    <div class="form-group">
                                    <label class="control-label col-sm-2" >Last Name:</label>
                                    <div class="col-sm-4"> 
                                      <input type="text" class="form-control" id="ln" name="lname" placeholder="Enter Last Name">
                                    <p ng-show="myForm.lname.$invalid && !myForm.lname.$pristine">Your last name is required.</p>
                                    </div>
                                  </div>
                                  <div class="form-group"> 
                                    <div class="col-sm-offset-2 col-sm-10">
                                      <button type="submit" class="btn btn-primary" ng-submit="submitForm()" ng-disabled="myForm.$invalid">Send</button>
                                    </div>
                                  </div>
                        </form>`,
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
            */
		};
        }
	};
});