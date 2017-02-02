angular.module('app').directive('applyClass', function(){

    return {
        restrict: 'A',
        controller: function($scope, $element){
            $element.addClass("length");
			scope.$watch('txtLength', function(newValue){
				if(textInput.length === 0){
				  console.log('Second number Empty');
				} else if (textInput.length >=20) {
				  console.log('yay');
				}
			}
		}}
    }

})