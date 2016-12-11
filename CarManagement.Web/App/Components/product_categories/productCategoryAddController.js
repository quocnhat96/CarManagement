(function (app) {
    app.controller('productCategoryAddController', productCategoryAddController);

    productCategoryAddController.$inject = ['apiService', '$scope', 'notificationService', '$state', 'commonService'];

    function productCategoryAddController(apiService, $scope, notificationService, $state, commonService) {
        $scope.productCategory = {
            CreatedDate: new Date(),
            Status: true
        };

        $scope.addProductCategories = addProductCategories;

        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.productCategory.Alias = commonService.getSeoTitle($scope.productCategory.Name);
        }

        function addProductCategories() {
            apiService.post('api/productcategory/create', $scope.productCategory,
               function (result) {
                   notificationService.displaySuccess(result.data.Name + ' has been added');
                   $state.go('product_categories')
               }, function (error) {
                   notificationService.displayError('Add New Product Category Unsuccessfully ')
               });
        }
    }
})(angular.module('carmanager.product_categories'));