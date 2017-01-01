(function () {
    var masmechsolApp = angular.module("masmechsolApp", ['masmechsolApp.controllers', 'masmechsolApp.directives', 'ngRoute', 'angular-loading-bar']);

    masmechsolApp.config(function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {
        $locationProvider.hashPrefix('!');
        cfpLoadingBarProvider.latencyThreshold = 500;

        $routeProvider
        .when('/', {
            templateUrl: 'scripts/pages/home.html',
            controller: 'mainCtrl',
            title: 'Home Page'
        })
        .when('/about', {
            templateUrl: 'scripts/pages/about.html',
            controller: 'aboutController',
            title:'About Us'
        })
        .when('/contact', {
            templateUrl: 'scripts/pages/contact.html',
            controller: 'ContactCtrl',
            title:'Contact Us'
        })
        .when('/design-engineering', {
            templateUrl: 'scripts/pages/design-engineering.html',
            title:'Design Engineering'

        })
        .when('/tool-making', {
            templateUrl: 'scripts/pages/tool-making.html',
            title:'Tool Making'

        })
        .when('/molding', {
            templateUrl: 'scripts/pages/molding.html',
            title:'Molding'
        })
        .when('/assembly', {
            templateUrl: 'scripts/pages/assembly.html',
            title:'Assembly'
        })
        .when('/value-added-services', {
            templateUrl: 'scripts/pages/value-added.html',
            title:'Value Added Services'
        })
        .when('/quality-system', {
            templateUrl: 'pages/quality-system.html',
            title:'Quality System'
        })
        .when('/jigs-fixtures', {
            templateUrl: 'scripts/pages/jig-fixtures.html',
            title:'JIGs Fixtures'
        })
        .when('/tool-design', {
            templateUrl: 'scripts/pages/tool-design.html',
            title:'Tool Designing'
        })
        .when('/faqs', {
            templateUrl: 'scripts/pages/faqs.html',
            title:'FAQs'
        })
        .when('/contact-us', {
            templateUrl: 'scripts/pages/contacts.html',
            title:'Contact Us'
        })
        .when('/request-quote', {
            templateUrl: 'scripts/pages/request-quote.html',
            title:'Request Quote'
        })
        .otherwise({
            redirectTo: '/'
        });
    });


    masmechsolApp.run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            var pageTitle = 'MAS Mechsol :: Ambala Cant | Chandigarh | New Delhi | India | CAD Designer | CAM Designer | 3D Molding | 2D Printing | JIGx-Fixture Designer making manufacture company | Tool Designer Making Manufacture company | Microscope | Microscope parts manufactures | Microscope part designeer engineer freelancer ';
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title + "-" + pageTitle;
            }
        });
    }]);

})();