'use strict';

angular.module('app')
	.controller('ProductsCtrl', function ($scope, $location, ProductService) {
		ProductService.getProducts().then(function(data) {
			$scope.products = data;
		});

		$scope.go = function(id){
			$location.path( '/products/detail/' + id );
		};
	});