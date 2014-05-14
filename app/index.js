'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RobotypeGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Robotype generator.'));

    var prompts = [{
      name: 'appname',
      message: 'How would you like to name your prototype?'
    },
	{
      name: 'bgcolor',
      message: 'Choose a background color (hex or css supported color name):',
	  default: '#fff'
    },
	{
      name: 'fontcolor',
      message: 'Choose a font color (hex or css supported color name):',
	  default: '#333'
    }];

    this.prompt(prompts, function (props) {
      this.appname = props.appname;
	  this.bgcolor = props.bgcolor;
	  this.fontcolor = props.fontcolor;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = RobotypeGenerator;

RobotypeGenerator.prototype.gruntfile = function gruntfile() {
  //this.template('Gruntfile.js');
};

RobotypeGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

RobotypeGenerator.prototype.bower = function bower() {
  this.copy('_bower.json', 'bower.json');
};

RobotypeGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

RobotypeGenerator.prototype.bowerrc = function bowerrc() {
  this.copy('bowerrc', '.bowerrc');
};

RobotypeGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

RobotypeGenerator.prototype.mockConfig = function mockConfig() {
  this.copy('mock.config.json', 'mock.config.json');
};

RobotypeGenerator.prototype.appCopy = function appCopy() {
	this.directory('app', 'app');
};

RobotypeGenerator.prototype.readmeMD = function readmeMD() {
  this.copy('README.md', 'README.md');
};

RobotypeGenerator.prototype.apiCopy = function apiCopy() {
	this.directory('api', 'api');
};

RobotypeGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};