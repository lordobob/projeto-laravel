/**
 * Created by Lucas on 28/10/2015.
 */
angular.module('app.controllers')
    .controller('ClientListController', ['$scope', 'Client', function ($scope, Client){
        $scope.clients = Client.query();


    }]);