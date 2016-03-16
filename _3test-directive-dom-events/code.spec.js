describe("Check simple hello world directive", function() {
	var compile, scope, directiveElem;

	function getCompiledElement(){
		var element = angular.element('<div third-directive></div>');
		var compiledElement = compile(element)(scope);
		scope.$digest();
		return compiledElement;
	}

	beforeEach(function(){
		module('sampleDirectives');

		inject(function($compile, $rootScope){
			compile = $compile;
			scope = $rootScope.$new();
		});

		directiveElem = getCompiledElement();
	});


	it('should increment value on click of button', function (){
		scope.value = 10;
		var button = directiveElem.find('button');

		button.triggerHandler('click');
		scope.$digest();

		expect(scope.value).toEqual(11);
	});
});