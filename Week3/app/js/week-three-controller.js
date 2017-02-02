angular.module('app')
.controller('WeekThreeController', ['$scope', function($scope) {
  $scope.weekThreeTitle = 'Week3';
}])
.controller("ParentCtrl", [ '$scope', function($scope){
    $scope.title = "I'm the Parent.";
 }])

.controller("ChildCtrl", [ '$scope', function($scope){
    $scope.title = "I'm the Child.";
}])

.controller("jsonEx", function($scope, $http) {
	$http.get("phones.json").then(function (response) {
		$scope.phones = response.data;
	});
});