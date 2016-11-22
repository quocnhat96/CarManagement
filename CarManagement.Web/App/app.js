/// <reference path="F:\Car Management\Source Code\GIT\CarManagement.Web\Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('carmanager',
        ['carmanager.products',
            'carmanager.product_categories',
            'carmanager.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: "/admin",
            templateUrl: "/App/Components/home/homeView.html",
            controller: "homeController"
        });

        $urlRouterProvider.otherwise("/admin");
    }
})();