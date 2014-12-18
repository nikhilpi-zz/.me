'use strict';

angular.module('core').directive('summaryView', [
	function() {
		return {
			templateUrl: 'modules/core/views/summary-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Summary view directive logic
				// ...

			}
		};
	}
]);