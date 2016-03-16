'use strict';

angular.module('sampleDirectives', [])
.directive('clickButton', function($timeout) {
	return function(scope, elem){
		var button = angular.element('<button>');
		button.text('Click me');
		button.on('click', function() {
			angular.element( this )
				.text('Loading...');
			$timeout(function() {
				button.text('Ok');
			}, 4000);
		});
		elem.append(button);

	};
});