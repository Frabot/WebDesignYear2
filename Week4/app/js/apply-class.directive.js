angular.module('app').directive('applyClass', function(){

    return {
        restrict: 'A',
		scope: {
			applyClass: "="
		},
        link: function(scope){
			scope.$watch('test', function(textInp){
				if(textInp.length === 0){
					console.log('=0');
					scope: {
						applyClass: "red"
					}
				} else if (textInp.length >=20) {
					console.log('more or equal to 20');
					scope: {
						applyClass: "green"
					}
				} else {
					console.log('less than 20');
					scope: {
						applyClass: "red"
					}
				}
			})
		}
	};
});