'use strict';

angular.module('app')
	.controller('ItemsCtrl', function ($scope, $location, ItemService) {
		ItemService.getItems().then(function(data) {
			$scope.items = data;
		});

		$scope.go = function(id){
			$location.path( '/items/detail/' + id );
		};
	});