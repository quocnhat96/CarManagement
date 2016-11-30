(function (app) {
    app.controller('productCategoryEditController', productCategoryEditController);

    productCategoryEditController.$inject = ['apiService','$scope', 'notificationService', '$state', '$stateParams','commonService'];

    function productCategoryEditController(apiService, $scope, notificationService, $state, $stateParams, commonService) {
        $scope.productCategory = {
            CreatedDate: new Date(),
            Status: true
        };

        $scope.updateProductCategories = updateProductCategories;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.productCategory.Alias = commonService.getSeoTitle($scope.productCategory.Name);
        }

        function loadProductCategoryDetails() {
            apiService.get('api/productCategory/getbyid/' + $stateParams.id, null,
                function (result) {
                    $scope.productCategory = result.data;
                },
                function (error) {
                    notificationService.displayError(error.data);
                });
        }

        function updateProductCategories() {
            apiService.put('api/productcategory/update', $scope.productCategory,
               function (result) {
                   notificationService.displaySuccess(result.data.Name + ' has been updated successfully');
                   $state.go('product_categories')
               }, function (error) {
                   notificationService.displayError('Update Product Category Unsuccessfully!!')
               });
        }

        loadProductCategoryDetails();
    }
})(angular.module('carmanager.product_categories'));