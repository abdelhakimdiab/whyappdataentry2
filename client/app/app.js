'use strict';

angular.module('whyAppDataEntryApp', [
        'whyAppDataEntryApp.auth',
        'whyAppDataEntryApp.admin',
        'whyAppDataEntryApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'btford.socket-io',
        'ui.router',
        'ui.bootstrap',
        'validation.match',
        'ui.bootstrap.datetimepicker',
        'ngMessages',
        'ngAnimate'
    ])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
