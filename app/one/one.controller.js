'use strict';

myModule.controller(
  'ControllerOne',
  ['$scope', ControllerOne]  // dependencies in array for minification
);

function ControllerOne($scope) {
  
    $scope.$on('handleBroadcast', function(event, args) {
        $scope.message = 'ONE: ' + args.message;
    });        
}