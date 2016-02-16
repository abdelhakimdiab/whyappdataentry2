'use strict';

angular.module('whyAppDataEntryApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/things',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
          controllerAs: 'main'
      });
  });
