'use strict';

angular.module('app')
  .factory('ProductService', function ($http, CONFIG) {

	// Public API here
	return {
		getProducts: function() {
			//return the promise directly.
			return $http.get(CONFIG.API.PRODUCTS.ALL)
				.then(function(result) {
					//resolve the promise as the data
					return  result.data;
				});
		},
		getProduct: function(id) {
			//return the promise directly.
			return $http({
					url: CONFIG.API.PRODUCTS.SINGLE + id,
					method: 'GET'
				}).then(function(result) {
					//resolve the promise as the data
					return result.data;
				});
		}
	};
});
