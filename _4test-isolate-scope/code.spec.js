describe("Check simple hello world directive", function() {
	var compile, scope, directiveElem;

	function getCompiledElement() {
		var html = '<fifth-directive config="config" notify="notify" on-change="onChange()"></fifth-directive>';
		var compiledDirective = compile(angular.element(html))(scope);
		scope.$digest();
		return compiledDirective;
	}

	beforeEach(function() {
		module('sampleDirectives');
		inject(function ($compile, $rootScope) {
			compile = $compile;
			scope = $rootScope.$new();
			scope.config = {
				prop: 'value'
			};
			scope.notify = true;
			scope.onChange = jasmine.createSpy('onChange');
		});
		directiveElem = getCompiledElement();
	});




	it('config on isolated scope should be two-way bound', function(){
		// isolateScope() - retrieves an isolate scope if one is attached directly
		// to the current element. This getter should be used only on elements that
		// contain a directive which starts a new isolate scope.
		var isolatedScope = directiveElem.isolateScope();

		isolatedScope.config.prop = "value2";

		expect(scope.config.prop).toEqual('value2');
	});

	it('notify on isolated scope should be one-way bound', function(){
		var isolatedScope = directiveElem.isolateScope();

		isolatedScope.notify = false;

		expect(scope.notify).toEqual(true);
	});

	it('onChange should be a function', function(){
		var isolatedScope = directiveElem.isolateScope();

		expect(typeof(isolatedScope.onChange)).toEqual('function');
	});

	it('should call onChange method of scope when invoked from isolated scope', function () {
		var isolatedScope = directiveElem.isolateScope();
		isolatedScope.onChange();

		expect(scope.onChange).toHaveBeenCalled();
	});
});