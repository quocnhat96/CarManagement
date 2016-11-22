/// <reference path="F:\Car Management\Source Code\GIT\CarManagement.Web\Assets/admin/libs/angular/angular.js" />

(function () {
    angular.module('carmanager.product_categories', ['carmanager.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('product_categories', {
            url: "/product_categories",
            templateUrl: "/App/Components/product_categories/productCategoryListView.html",
            controller: "productCategoryListController"
        })
    }
})();