'use strict';


angular.module('sampleDirectives', [])
	.directive('basket', function () {
		return {
			controller: function($scope) {
				$scope.basket = [];
				this.addOrange = function(element) {
					$scope.basket.push(element);
					console.log('addOrange');
				}
				this.addApple = function(element) {
					$scope.basket.push(element);
					console.log('addOrange');
				}
			}
		};
}).directive('orange', function () {
		return {
			require: ['^basket'],
			link: function(scope, element, attr, ctrls) {
				ctrls[0].addOrange('orange');
			}
		};
	});