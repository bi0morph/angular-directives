'use strict';

angular.module('sampleDirectives', [])
	.filter('length', function() {
		return function(text) {
			return ('' + (text || '')).length;
		}
	});