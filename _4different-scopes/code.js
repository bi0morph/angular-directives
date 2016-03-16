'use strict';

angular.module('sampleDirectives', [])
	.controller('InitCtrl', function InitCtrl($scope){
			$scope.hello = 'world';

			$scope.config = 'con';
			$scope.not = 'notify';
			$scope.count = function(x) {
				alert(x);
			};
	})
	.directive('sameScope', function(){
		return {
			scope: false, // scope не будет создан
			link: function(scope, elem) {
				var html = '<span>Same scope. id: ' + scope.$id + '. ' + scope.hello + '</span>';
				var spanElement = angular.element(html);
				elem.append(spanElement);
			}
		};
})
	.directive('newInheritScope', function(){
		return {
			scope: true, // scope не будет создан
			link: function(scope, elem) {
				var html = '<span>New scope with inherited. id: ' + scope.$id + '. ' + scope.config + '</span>';
				var spanElement = angular.element(html);
				elem.append(spanElement);
			}
		};
	})
	.directive('isolatedScope', function () {
		return {
			scope:{
				// "=" - свойства должны быть такими же, как и на внешнем scope
				// и обладают двунаправленной связью
				config: '=',
				// "@" - свойство в изолированном scope
				// получает одностороннее связывание
				notify: '@',
				// "&" - свойство в изолированном scope
				// должно быть функцие и метод на внешнем скойпе вызовется
				// когда будет вызвана функция в изолированном
				onChange:'&'
			},
			link: function(scope, elem) {
				var html = '<span>Isolated scope. id: ' + scope.$id + '. ' + scope.hello +
					'. config: ' + scope.config + '. notify: ' + scope.notify +	'</span>';
				var spanElement = angular.element(html);
				elem.append(spanElement);
			}
		};
	});