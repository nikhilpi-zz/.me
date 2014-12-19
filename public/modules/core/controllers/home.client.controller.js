'use strict';


angular.module('core').controller('HomeController', ['$scope',
	function($scope) {
		$scope.settings = {
        
        // Parallax background effect?
            parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
            parallaxFactor: 20

        };

        $scope.projects = [{title:'test 1', subtitle: 'test sub', image:'/modules/core/images/thumbs/01.jpg'},
                            {title:'test 2', subtitle: 'test sub'}];

        skel.init({
            reset: 'full',
            containers: '100%',
            breakpoints: {
                global: { href: '/modules/core/css/style.css', grid: { gutters: ['2.5em', 0] } },
                xlarge: { media: '(max-width: 1800px)', href: '/modules/core/css/skel/style-xlarge.css' },
                large: { media: '(max-width: 1280px)', href: '/modules/core/css/skel/style-large.css', grid: { gutters: ['2em', 0] } },
                medium: { media: '(max-width: 980px)', href: '/modules/core/css/skel/style-medium.css'},
                small: { media: '(max-width: 736px)', href: '/modules/core/css/skel/style-small.css', grid: { gutters: ['1.5em', 0], zoom: 2 }, viewport: { scalable: false } },
                xsmall: { media: '(max-width: 480px)', href: '/modules/core/css/skel/style-xsmall.css', grid: { zoom: 3 } }
            }
        });

	}
]);