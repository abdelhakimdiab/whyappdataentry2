'use strict';

angular.module('whyAppDataEntryApp.auth', [
  'whyAppDataEntryApp.constants',
  'whyAppDataEntryApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
