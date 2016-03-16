'use strict';

angular.module('sampleDirectives', [])
	.controller('CountCtrl', function CountCtrl() {
		this.count = 4;
	})

	//1.4.x angularjs
	.directive('counterDirective', function counter() {
		return {
			scope: {},
			bindToController: {
				count: '='
			},
			controller: function () {
				function increment() {
					this.count++;
				}
				function decrement() {
					this.count--;
				}
				this.increment = increment;
				this.decrement = decrement;
			},
			controllerAs: 'counter',
			template: [
				'<div class="todo">',
				'<input type="text" ng-model="counter.count">',
				'<button type="button" ng-click="counter.decrement();">-</button>',
				'<button type="button" ng-click="counter.increment();">+</button>',
				'</div>'
			].join('')
		};
	})
	// 1.5
.component('counterComponent', {
	bindings: {
		count: '='
	},
	controller: function () {
		function increment() {
			this.count++;
		}
		function decrement() {
			this.count--;
		}
		this.increment = increment;
		this.decrement = decrement;
	},
	template: [
		'<div class="todo">',
		'<input type="text" ng-model="$ctrl.count">',
		'<button type="button" ng-click="$ctrl.decrement();">-</button>',
		'<button type="button" ng-click="$ctrl.increment();">+</button>',
		'</div>'
	].join('')
});

// https://toddmotto.com/exploring-the-angular-1-5-component-method/