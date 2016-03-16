'use strict';


angular.module('sampleDirectives', [])
	.directive('sixthDirective', function () {
	return {
		// The directive requires ngModel and optionally requires form in a parent element
		require: ['ngModel', '^?form'],
		link: function(scope, elem, attrs, ctrls){
			if(ctrls[1]){
				ctrls[1].$setDirty();
			}
		}
	};
});