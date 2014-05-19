Robotype
========

Robotype speeds up your rapid prototyping by generating a quick-start project setup featuring:

-	[Yeoman](http://yeoman.io/)</a> generator - easy head-start
-	[AngularJS](https://angularjs.org/) app - simple prototype showcase
-	[Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/) - easy and robust UI widgets
-	[Swagger-based](https://helloreverb.com/developers/swagger) mock server - proving sample data

## Prerequisites

1.	Install [NodeJs](http://nodejs.org)
2.	Install Yeoman via the Node.js package manager in your shell / commandline:

	```shell
	npm install -g yo
	```

3.	Install the Robotype generator (globally):

	```shell
	npm install -g generator-robotype
	```

## Quick-Start

1.	Switch to your project directory and call the Yeoman Robotype generator:

	```shell
	yo robotype
	```

2.	Enter a project name, when the robotype generator asks you for it.

3.	Start the server with grunt:

	```shell
	Grunt serve
	```

Robotype is now up and running and you should see the example application in your web browser.

## Documentation

### What's included

When the Robotype generator is finished you'll find the following directories and files. You'll see something like this:

```
robotype/
├── api/
│   ├── customFunctions.js
│   ├── products.json
│   └── users.json
├── app/
│   ├── bower_components/
│   ├── images/
│   ├── scripts/
│   ├── src/
│   │   ├── partials/
│   │   ├── products/
│   │   ├── users/
│   │   ├── apiService.js
│   │   └──  app.js
│   │   ...
│   ├── styles/
│   └── index.html
├── node_modules/
├── bower.json
├── Gruntfile.js
├── mock.config.json
└── package.js
```

### API
The APIs and data models are defined in separate JSON files located inside the /api directory. Each type has its own JSON file (products.json, users.json).
On how to describe the APIs and the data models please consult the [Swagger RESTful API Documentation Specification](https://github.com/wordnik/swagger-spec/blob/master/versions/1.2.md)

By specifing a "mockValue" in your models you can define what kind of mock data the mock server should return for each property in your model. For the functions available take a look at the functions.js of the vi mock server (/node_modules/vi-mock-server/functions.js).

To extend or build your own API, you can define new types based on the examples given. To access them in you application, you have to extend the mapping in the ApiService factory (/app/apiService.js):
```js
angular.module('app')
  .factory('ApiService', function () {

	// Public API here
	return {
		getApis: function() {
			//return the promise directly.
			return [
				{name: 'overview', path: ''},
				{name: 'users', path: 'users'},
				{name: 'products', path: 'products'}
			];
		}
	};
});
```

### Modules
For each data type of the API there is a corresponding module directory in /app/src/{module}. Robotype contains the example modules "products" and "users". Each module contains:

- a view template for individual element (product.html)
- a view template for the aggregation of elements (products.html),
- a controller for the element type (productCtrl.js)
- a service factory for getting the data via the API (productService.js)

### Routes
Angular routes to the different views are defined in /app/src/app.js. Also configure your own routes based on the examples as required:

```js
angular.module('app', [
		'ngRoute',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			...
			.when('/products/', {
				templateUrl: 'src/products/products.html',
				controller: 'ProductsCtrl'
			})
			.when('/products/detail/:id', {
				templateUrl: 'src/products/product.html',
				controller: 'ProductCtrl'
			})
			...
	});
```

### Partials
Reusable html templates such as header.html are located in /app/src/partials/*. They are included in each view template with ng-include:
```html
<div ng-include="'src/partials/header.html'"></div>
```

### Angular UI Bootstrap
The UI of the showcase app is enhanced by Angular UI Bootstrap widgets. With UI Bootstrap you can easily build your own frontend for your prototype.
For usage of these widgets, please refer to [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/) or [Bootstrap](http://getbootstrap.com/)

## Creators
[Marco Fenske](mailto:marco.fenske@virtual-identity.com), [Clemens Fiedler](mailto:clemens.fiedler@virtual-identity.com), [Jan Hadenfeldt](mailto:jan.hadenfeldt@virtual-identity.com), [Ralf Hafner](mailto:ralf.hafner@virtual-identity.com), [Marc Linden](mailto:marc.linden@virtual-identity.com), [Timo Mayer](mailto:timo.mayer@virtual-identity.com)


## Copyright and license

Code and documentation copyright 2014 [Virtual Identity AG](http://www.virtual-identity.com). Code released under the [MIT license](License.txt). Docs released under [Creative Commons cc-by-sa](https://creativecommons.org/licenses/by-sa/4.0/).
