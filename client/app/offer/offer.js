'use strict';

angular.module('whyAppDataEntryApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('offers', {
                url: '/',
                templateUrl: 'app/offer/offer.html',
                controller: 'OfferCtrl',
                controllerAs: 'OfferCtrl'
            });
    });
