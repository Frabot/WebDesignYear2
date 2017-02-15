angular.module('app').directive('blogDirective', function () {
    "use strict";
    return {
        restrict: 'E',
		scope: {
			article: "="
		},
        template: `<h3>{{article.title}}</h3> 
                        <h4>by {{article.author}}</h4> 
                            <p class="text-justify">{{article.articleBlog}}</p>`,
        controller : function ($scope) {}
	};
});