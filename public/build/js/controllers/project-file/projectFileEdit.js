/**
 * Created by Lucas on 28/10/2015.
 */
angular.module('app.controllers')
    .controller('ProjectFileEditController',
    ['$scope', '$location', 'ProjectFile', '$routeParams',
        function ($scope, $location, ProjectFile, $routeParams){

        $scope.projectFile = ProjectFile.get({
            id: $routeParams.id,
            idFile: $routeParams.idFile
        });

        $scope.save = function () {
            if($scope.form.$valid){
                ProjectFile.update({
                    id: $routeParams.id,
                    idFile: $scope.projectFile.id
                }, $scope.projectFile, function(){
                    $location.path('/project/'+$routeParams.id+'/files');
                });
            }
        }

    }]);