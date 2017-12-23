// AngularJS - Communication Between Controllers

// This is an example of how to use $emit and $on
// to facilitate communication between multiple controllers
// using $rootscope as an event bus.

var myModule = angular.module('myModule', []);

myModule.run(function($rootScope) {
    /*
        Receive emitted message and broadcast it.
        Event names must be distinct or browser will blow up!
    */
    $rootScope.$on('handleEmit', function(event, args) {
        $rootScope.$broadcast('handleBroadcast', args);
    });
});

// Run blocks - get executed after the injector is created and are
// used to kickstart the application. Only instances and constants
// can be injected into run blocks. This is to prevent further system
// configuration during application run time.

// Run blocks are the closest thing in Angular to the main method.
// A run block is the code which needs to run to kickstart the
// application. It is executed after all of the service have been
// configured and the injector has been created.
// Run blocks typically contain code which is hard to unit-test,
// and for this reason should be declared in isolated modules,
// so that they can be ignored in the unit-tests.

//---------------------------------------
// Inline code for service and controllers below
// - original version, rewritten as modular components
//---------------------------------------

// myModule.controller(
//   'ControllerZero',
//   ['$scope', ControllerZero]  // dependencies in array for minification
// );

// function ControllerZero($scope) {
//     $scope.handleClick = function(msg) {
//         $scope.$emit('handleEmit', {message: msg});
//     };
// }

// myModule.controller(
//   'ControllerOne',
//   ['$scope', ControllerOne]  // dependencies in array for minification
// );

// function ControllerOne($scope) {
//     $scope.$on('handleBroadcast', function(event, args) {
//         $scope.message = 'ONE: ' + args.message;
//     });        
// }

// myModule.controller(
//   'ControllerTwo',
//   ['$scope', ControllerTwo]  // dependencies in array for minification
// );

// function ControllerTwo($scope) {
//     $scope.$on('handleBroadcast', function(event, args) {
//         $scope.message = 'TWO: ' + args.message;
//     });
// }

//---------------------------------------
// Original - used angular-1.0.0rc9.js:
// per: https://stackoverflow.com/questions/29467339/how-to-call-a-function-from-another-controller-in-angularjs
// per: http://jsfiddle.net/VxafF/
//---------------------------------------

// var myModule = angular.module('myModule', []);

// myModule.run(function($rootScope) {
//     /*
//         Receive emitted message and broadcast it.
//         Event names must be distinct or browser will blow up!
//     */
//     $rootScope.$on('handleEmit', function(event, args) {
//         $rootScope.$broadcast('handleBroadcast', args);
//     });
// });

// function ControllerZero($scope) {
//     $scope.handleClick = function(msg) {
//         $scope.$emit('handleEmit', {message: msg});
//     };
// }

// function ControllerOne($scope) {
//     $scope.$on('handleBroadcast', function(event, args) {
//         $scope.message = 'ONE: ' + args.message;
//     });        
// }

// function ControllerTwo($scope) {
//     $scope.$on('handleBroadcast', function(event, args) {
//         $scope.message = 'TWO: ' + args.message;
//     });
// }

// ControllerZero.$inject = ['$scope'];

// ControllerOne.$inject = ['$scope'];

// ControllerTwo.$inject = ['$scope'];