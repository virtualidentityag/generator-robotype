'use strict';

angular.module('app')
	.controller('HeaderNavCtrl', function ($scope, ApiService) {
		$scope.types = ApiService.getApis();
	});