'use strict';


angular.module('sampleDirectives', [])
	.directive('fifthDirective', function () {
	return {
		scope:{
			config: '=',
			notify: '@',
			onChange:'&'
		}
	}
});