'use strict';

myModule.controller(
  'ControllerTwo',
  ['$scope', ControllerTwo]  // dependencies in array for minification
);

function ControllerTwo($scope) {
  
    $scope.$on('handleBroadcast', function(event, args) {
        $scope.message = 'TWO: ' + args.message;
    });
}