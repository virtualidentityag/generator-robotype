'use strict';

angular.module('app')
	.controller('ProductCtrl', function ($scope, $routeParams, $route, ProductService) {
		ProductService.getProduct($routeParams.id).then(function(data) {
			$scope.product = data;
		});
	});