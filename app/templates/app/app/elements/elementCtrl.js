'use strict';

angular.module('app')
.controller('ElementCtrl', function ($scope, $routeParams, ElementService) {
	var item = ElementService.getItem();
	$scope.item = item.get({'id': $routeParams.id});
});