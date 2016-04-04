(function() {
	'use strict';
	angular.module('handlebarsTextangular')
	.directive('handlebarsPreview', function() {
		return {
			restrict: 'E',
			templateUrl: './js/handlebarsPreview/tpl.html',
			controller: HandlebarsPreviewController,
			controllerAs: 'HandlebarsPreviewController'
		}
	})

	function HandlebarsPreviewController($sanitize) {
		var vm = this;
		vm.emailHtml = '';
		vm.context = '{}';
		vm.compileTemplate = function() {
			var parsedContext;
			try {
				parsedContext = JSON.parse(vm.context);
			} catch(err) {
				return "There was an error with the context passed to the template";
			}
			try {
				vm.compiledTemplate = Handlebars.compile(vm.emailHtml)(parsedContext);
				return vm.compiledTemplate;
			} catch(err) {
				return '';
			}
		}
	}
})();