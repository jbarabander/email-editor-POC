(function() {
	angular.module('handlebarsTextangular')
	.directive('handlebarsPreview', function() {
		return {
			restrict: 'E',
			template: './handlebarsPreview/tpl.html',
			controller: HandlebarsPreviewController
			controllerAs: 'HandlebarsPreviewController'
		}
	})

	function HandlebarsPreviewController() {
		
	}
})()