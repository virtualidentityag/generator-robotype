'use strict';

angular.module('app')
  .factory('ApiService', function () {

	// Public API here
	return {
		getApis: function() {
			//return the promise directly.
			return [
				{name: 'overview', path: ''},
				{name: 'items', path: 'items'},
				{name: 'elements', path: 'elements'}
			];
		}
	};
});
