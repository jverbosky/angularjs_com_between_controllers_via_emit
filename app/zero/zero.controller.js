'use strict';

myModule.controller(
  'ControllerZero',
  ['$scope', ControllerZero]  // dependencies in array for minification
);

function ControllerZero($scope) {
  
    $scope.handleClick = function(msg) {
        $scope.$emit('handleEmit', {message: msg});
    };
}