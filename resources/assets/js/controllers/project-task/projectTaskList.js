/**
 * Created by Lucas on 28/10/2015.
 */
angular.module('app.controllers')
    .controller('ProjectTaskListController',
    ['$scope', '$routeParams', '$location', 'ProjectTask', 'appConfig',
        function ($scope, $routeParams, $location, ProjectTask, appConfig){

            $scope.projectTask = new ProjectTask();

            $scope.save = function () {
                if($scope.form.$valid) {

                    $scope.projectTask.status = appConfig.projectTask.status[0].value;

                    $scope.projectTask.$save({
                        id: $routeParams.id,
                        idTask: $routeParams.idTask
                    }).then( function(){
                        $scope.projectTasks = new ProjectTask();
                        $scope.loadTask();
                    })
                }
            };

            $scope.loadTask = function () {
                $scope.projectTasks = ProjectTask.query({
                    id: $routeParams.id,
                    orderBy: 'id',
                    sortedBy: 'desc'
                });
            };

            $scope.loadTask();
    }]);