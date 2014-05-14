'use strict';

angular.module('app', [
		'ngRoute',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'src/overview.html',
				controller: 'OverviewCtrl'
			})
			.when('/users', {
				templateUrl: 'src/users/users.html',
				controller: 'UsersCtrl'
			})
			.when('/users/detail/:id', {
				templateUrl: 'src/users/user.html',
				controller: 'UserCtrl'
			})
			.when('/products/', {
				templateUrl: 'src/products/products.html',
				controller: 'ProductsCtrl'
			})
			.when('/products/detail/:id', {
				templateUrl: 'src/products/product.html',
				controller: 'ProductCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
