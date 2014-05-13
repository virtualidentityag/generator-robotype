'use strict';

angular.module('app')
	.controller('ElementsCtrl', function ($scope, $location, ElementService) {
		var items = ElementService.getElements();
		$scope.items = items.get();

		$scope.go = function(id){
			$location.path( '/elements/detail/' + id );
		};

	});