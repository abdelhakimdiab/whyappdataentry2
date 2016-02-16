'use strict';

(function () {

    class OfferCtrl {

        constructor($http, $scope, socket) {
            this.$http = $http;
            this.offers = [];
            this.isOpen = {
                from: false,
                to: false
            };
            this.currentDate = new Date();
            this.offerSource = "Groupon";
            this.submitted = false;
            this.searchText = "sdfsdf";



            $http.get('/api/offers').then(response => {
                this.offers = response.data;
                socket.syncUpdates('offer', this.offers);
            });

            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('offer');
            });
        }

        submit() {
            this.submitted = true;
        };

        interacted(field) {
            return this.submitted || field.$dirty;
        };

        addOffer() {
            if (this.offerText) {
                this.$http.post('/api/offers', {
                    offerText: this.offerText,
                    offerSource: this.offerSource,
                    from: this.from,
                    to: this.to,
                    oldPrice: this.oldPrice,
                    newPrice: this.newPrice
                });
                this.offerText = '';
                this.from = '';
                this.to = '';
                this.oldPrice = '';
                this.newPrice = '';
            }
        }

        deleteOffer(offer) {
            this.$http.delete('/api/offers/' + offer._id);
        }

        openCalendar(e, date) {
            e.preventDefault();
            e.stopPropagation();
            this.isOpen[date] = true;
        };
    }

    angular.module('whyAppDataEntryApp')
        .controller('OfferCtrl', OfferCtrl);

})();
