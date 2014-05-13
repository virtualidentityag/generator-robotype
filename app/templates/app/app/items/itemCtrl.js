'use strict';

angular.module('app')
	.controller('ItemCtrl', function ($scope, $routeParams, $route, ItemService) {
		ItemService.getItem($routeParams.id).then(function(data) {
			$scope.item = data;
		});
	});