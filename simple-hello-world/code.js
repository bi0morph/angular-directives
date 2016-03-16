'use strict';

angular.module('sampleDirectives', [])
	.directive('helloWorld', function() {
		return function(scope, elem){
			elem.append('<span>Hello world.</span>');
		};
	});