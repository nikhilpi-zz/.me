'use strict';

angular.module('core').directive('headerView', [
	function($window) {
		return {
			templateUrl: 'modules/core/views/header-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
        
			}
		};
	}
]);