angular.module('app').directive('blogDirective', function () {
    "use strict";
    return {
        restrict: 'E',
		scope: {
			article: "="
		},
        templateUrl: '../js/blog_template.html',
        controller : function ($scope) {}
	};
});