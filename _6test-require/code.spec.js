describe("Check simple hello world directive", function() {
	var compile, scope, directiveElem;

	function getCompiledElement(template){
		var compiledDirective = compile(angular.element(template))(scope);
		scope.$digest();
		return compiledDirective;
	}

	beforeEach(function() {
		module('sampleDirectives');
		inject(function ($compile, $rootScope) {
			compile = $compile;
			scope = $rootScope.$new();
		});
	});


	it('should fail if ngModel is not specified', function () {
		expect(function(){
			getCompiledElement('<input type="text" sixth-directive />');
		}).toThrow();
	});


	it('should work if ng-model is specified and not wrapped in form', function () {
		expect(function(){
			getCompiledElement('<div><input type="text" ng-model="name" sixth-directive /></div>');
		}).not.toThrow();
	});

	it('should set form dirty', function () {
		var directiveElem = getCompiledElement('<form name="sampleForm"><input type="text" ng-model="name" sixth-directive /></form>');

		expect(scope.sampleForm.$dirty).toEqual(true);
	});
});