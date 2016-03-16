'use strict';

angular.module('sampleDirectives', []).directive('seventhDirective', function () {
	return {
		replace: true,
		template: '<div>Content in the directive</div>'
	};
});