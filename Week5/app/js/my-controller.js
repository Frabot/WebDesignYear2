angular.module('app')
.controller('myController', ['$scope', function($scope) {
  	$scope.articles = [
  		{
  			title : "My first article",
  			author : "Random person",
  			articleBlog : "ThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatest"
  		},
  		{
  			title : "My first article",
  			author : "Random person",
  			articleBlog : "ThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatest"
  		},
  		{
  			title : "My first article",
  			author : "Random person",
  			articleBlog : "ThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatestThisisatest"
  		}
  	];
}]);