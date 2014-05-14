'use strict';

angular.module('app')
  .factory('UserService', function ($http, CONFIG) {

	// Public API here
	return {
		getUsers: function() {
			//return the promise directly.
			return $http.get(CONFIG.API.USERS.ALL)
				.then(function(result) {
					//resolve the promise as the data
					return  result.data;
				});
		},
		getUser: function(id) {
			//return the promise directly.
			return $http({
					url: CONFIG.API.USERS.SINGLE + id,
					method: 'GET'
				}).then(function(result) {
					//resolve the promise as the data
					return result.data;
				});
		}
	};
});
