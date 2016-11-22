(function (app) {
    app.filter('statusFilter', function () {
        return function (input) {
            if (input == true)
                return 'Unlock';
            else return 'Lock';
        }
    });

})(angular.module('carmanager.common'));