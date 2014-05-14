'use strict';

angular.module('app')
	.controller('OverviewCtrl',  function ($scope, ApiService) {
		$scope.types = ApiService.getApis();
	});