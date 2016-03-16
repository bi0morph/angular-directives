'use strict';

angular.module('sampleDirectives', []).directive('thirdDirective', function () {
	return {
		template: '<button>Increment value!</button>',
		link: function (scope, elem) {
			elem.find('button').on('click', function(){
				scope.value++;
			});
		}
	};
});