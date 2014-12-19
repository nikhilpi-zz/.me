'use strict';

angular.module('core').directive('workView', [
	function() {
		return {
			templateUrl: 'modules/core/views/work-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	}
]);