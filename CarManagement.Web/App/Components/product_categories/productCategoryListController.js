(function (app) {
    app.controller('productCategoryListController', productCategoryListController);

    productCategoryListController.$inject = ['$scope', 'apiService', 'notificationService', '$ngBootbox', '$filter' ];

    function productCategoryListController($scope, apiService, notificationService, $ngBootbox, $filter) {
        $scope.productCategories = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getProductCategories = getProductCategories;
        $scope.keyword = '';

        $scope.search = search;

        $scope.deleteProductCategory = deleteProductCategory;

        $scope.Sort = Sort;

        function Sort(keyname) {
            $scope.sortKey = keyname;   //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }

        $scope.$watch('productCategories', function (n, o) {
            var checked = $filter('filter')(n, { checked: true });
            if (checked.length) {
                $scope.selected = checked;
                $('#btnDelete').removeAttr('disabled');
            }
            else {
                $('#btnDelete').attr('disabled', 'disabled');
            }
        }, true);

        $scope.selectAll = selectAll;
        $scope.isAll = false;
        $scope.deleteMultiple = deleteMultiple;


        function selectAll() {
            if ($scope.isAll === false) {
                angular.forEach($scope.productCategories, function (item) {
                    item.checked = true;
                });
                $scope.isAll = true;
            }
            else {
                angular.forEach($scope.productCategories, function (item) {
                    item.checked = false;
                });
                $scope.isAll = false;
            }
        }

        function deleteProductCategory(id) {
            $ngBootbox.confirm('Do you want to delete?').then(function () {
                var config = {
                    params: {
                        id: id
                    }
                }
                apiService.del('api/productcategory/delete', config, function () {
                    notificationService.displaySuccess('Delete successfully!');
                    search();
                }, function () {
                    notificationService.displayError('Delete unsuccessfully!');
                })
            });
        };

        function deleteMultiple() {
            var listId = [];
            $.each($scope.selected, function (i, item) {
                listId.push(item.ID);
            });
            $ngBootbox.confirm('Do you want to delete this item selected?').then(function () {
                var config = {
                    params: {
                        checkedProductCategories: JSON.stringify(listId)
                    }
                }
                apiService.del('api/productcategory/deletemulti', config, function (result) {
                    notificationService.displaySuccess('Deleted Successfully ' + result.data + ' records');
                    search();
                }, function (error) {
                    notificationService.displayError('Delete unsuccessfully!');
                });
            });
        }


        function search() {
            getProductCategories();
        }

        function getProductCategories(page) {
            page = page || 0;

            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 20
                }
            }

            apiService.get('/api/productcategory/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning('No record');
                }
                $scope.productCategories = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;

            }, function (error) {
                console.log('Load product categories failed.');
            });
        }

        $scope.getProductCategories();
    }
})(angular.module('carmanager.product_categories'));