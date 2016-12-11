/// <reference path="F:\Car Management\Source Code\GIT\CarManagement.Web\Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('carmanager.products', ['carmanager.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            .state('products', {
                url: "/products",
                parent: 'base',
                templateUrl: "/App/Components/products/productListView.html",
                controller: "productListController"
        }).state('products_add', {
            url: "/products_add",
            parent: 'base',
            templateUrl: "/App/Components/products/productAddView.html",
            controller: "productAddController"
        }).state('products_edit', {
            url: "/products_edit/:id",
            parent: 'base',
            templateUrl: "/App/Components/products/productEditView.html",
            controller: "productEditController"
        });
    }
})();