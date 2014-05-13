'use strict';

angular.module('app')
  .factory('ElementService', function ($resource, CONFIG) {

	// Public API here
	return {
		getElements: function() {
			//return the REST resource directly.
			return $resource(CONFIG.API.ELEMENTS.ALL);
		},
		getElement: function() {
			//return the REST resource directly.
			return $resource(CONFIG.API.ELEMENTS.SINGLE + ':id');
		}
	};
});
