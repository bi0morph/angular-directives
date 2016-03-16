'use strict';

angular.module('sampleDirectives', [])
	.controller('UsersCtrl', function($scope, $log){
		$scope.users = ['Ruslan', 'Ivan', 'Griffin'];
		$scope.remove = function(el) {
			var index = $scope.users.indexOf(el);
			$scope.users.splice(index, 1);
		};
	})
	.directive('user', function() {
		return {
			scope: {
				name: '=',
				remove: '&'
			},
			template: '<h3>{{name}} <button ng-click="remove()">remove</button></h3>'
		};
	});