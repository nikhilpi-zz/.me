'use strict';

angular.module('core').directive('projectsView', [
	function() {
		return {
			templateUrl: 'modules/core/views/projects-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
        var lenP = scope.projects.projects.length;
        scope.spacing = 0;
        scope.rows = lenP - lenP % 4;
        console.log(lenP);
        if (lenP % 4 !== 0){
          scope.spacing = Math.floor((4 - lenP % 4)/2);   
        }
			}
		};
	}
]);