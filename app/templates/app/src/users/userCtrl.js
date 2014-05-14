'use strict';

angular.module('app')
	.controller('UserCtrl', function ($scope, $routeParams, $route, UserService) {
		UserService.getUser($routeParams.id).then(function(data) {
			$scope.user = data;
		});
	});