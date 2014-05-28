// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require angular
//= require angular-resource
//= require angular-route
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var groceryApp = angular.module('groceryApp', ['ngResource']);

groceryApp.config(function ($httpProvider) {
  // CSRF
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});

groceryApp.factory('List', function($resource) {
  return $resource("/lists/:id.json", {id: '@id'}, {
    update: {
      method: 'PUT'
    },
	remove:{
		method: 'DELETE'
	},
	save:{
		method: 'POST'
	}	
  })
});


groceryApp.controller('ListCtrl', function($scope, List){  
$scope.list = List.query();
console.log($scope.list);
/*
  $scope.list = [
    {name: 'A bag of potato chips', healthy: false, complete: true},
    {name: 'Beets', healthy: true},
    {name: 'Ice cream', healthy: false},
    {name: 'Hot Pockets', healthy: false},
    {name: 'Cashews', healthy: true}
  ];
  */
  
  $scope.clicked = function(item) {    
    item.complete = !item.complete;
	List.update(item);

  };
});
//test