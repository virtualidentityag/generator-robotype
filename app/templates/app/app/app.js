'use strict';

angular.module('app', [
		'ngRoute',
		'ngResource',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/overview.html',
				controller: 'OverviewCtrl'
			})
			.when('/items', {
				templateUrl: 'app/items/items.html',
				controller: 'ItemsCtrl'
			})
			.when('/items/detail/:id', {
				templateUrl: 'app/items/item.html',
				controller: 'ItemCtrl'
			})
			.when('/elements/', {
				templateUrl: 'app/elements/elements.html',
				controller: 'ElementsCtrl'
			})
			.when('/elements/detail/:id', {
				templateUrl: 'app/elements/element.html',
				controller: 'ElementCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
