'use strict';

angular.module('app')
	.controller('UsersCtrl', function ($scope, $location, UserService) {
		UserService.getUsers().then(function(data) {
			$scope.users = data;
		});

		$scope.go = function(id){
			$location.path( '/users/detail/' + id );
		};
	});