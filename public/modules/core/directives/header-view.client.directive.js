'use strict';

angular.module('core').directive('headerView', [
	function($window) {
		return {
			templateUrl: 'modules/core/views/header-view.client.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
        var settings = scope.settings;
        var $header = element.find('header');
        var windowEl = angular.element($window);

        if (skel.vars.browser == 'ie' ||  skel.vars.isMobile) settings.parallax = false;

        if (settings.parallax) {
          skel.change(function() {
            if (skel.isActive('medium')) {
              windowEl.off('scroll.strata_parallax');
              $header.css('background-position', 'top left, center center');
            }
            else {
              $header.css('background-position', 'left 0px');
                angular.element($window).bind('scroll', function() {
                  $header.css('background-position', 'left ' + (-1 * (parseInt(windowEl.scrollTop()) / settings.parallaxFactor)) + 'px');
                  console.log("scroll");
              });
              
            }
          
          });
          
        }
			}
		};
	}
]);