'use strict';

angular.module('app', [
		'ngRoute',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/overview.html',
				controller: 'OverviewCtrl'
			})
			.when('/users', {
				templateUrl: 'app/users/users.html',
				controller: 'UsersCtrl'
			})
			.when('/users/detail/:id', {
				templateUrl: 'app/users/user.html',
				controller: 'UserCtrl'
			})
			.when('/products/', {
				templateUrl: 'app/products/products.html',
				controller: 'ProductsCtrl'
			})
			.when('/products/detail/:id', {
				templateUrl: 'app/products/product.html',
				controller: 'ProductCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
