'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
        'title': 'Groupon',
        'state': 'offers'
    }];

    isCollapsed = true;
    //end-non-standard

    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }
}

angular.module('whyAppDataEntryApp').controller('NavbarController', NavbarController);
