'use strict';

angular.module('app')
  .factory('ItemService', function ($http, CONFIG) {

	// Public API here
	return {
		getItems: function() {
			//return the promise directly.
			return $http.get(CONFIG.API.ITEMS.ALL)
				.then(function(result) {
					//resolve the promise as the data
					return  result.data;
				});
		},
		getItem: function(id) {
			//return the promise directly.
			return $http({
					url: CONFIG.API.ITEMS.SINGLE + id,
					method: 'GET'
				}).then(function(result) {
					//resolve the promise as the data
					return result.data;
				});
		}
	};
});
