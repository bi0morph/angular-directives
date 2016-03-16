describe("Check simple hello world directive", function() {
	var compile, scope, directiveElem;

	function getCompiledElement(){
		var element = angular.element('<div second-directive></div>');
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

	it('should have span element', function () {
		var spanElement = directiveElem.find('span');
		expect(spanElement).toBeDefined();
		expect(spanElement.text()).toEqual('Hello world.');
	});

});