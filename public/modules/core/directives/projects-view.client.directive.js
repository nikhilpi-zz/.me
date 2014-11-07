'use strict';

angular.module('core').directive('projectsView', [
	function() {
		return {
			templateUrl: 'modules/core/views/projects-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);