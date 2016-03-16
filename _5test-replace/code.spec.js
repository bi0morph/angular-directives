describe("Check simple hello world directive", function() {
	var compile, scope, directiveElem;

	function getCompiledElement(){
		var element = angular.element('<div><hello-world></hello-world></div>');
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

	});


	it('should have replaced directive element', function () {
		var compiledDirective = compile(angular.element('<div><seventh-directive></seventh-directive></div>'))(scope);
		scope.$digest();

		expect(compiledDirective.find('seventh-directive').length).toEqual(0);
	});
});