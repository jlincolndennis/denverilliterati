var app = angular.module('bookClub', ['ngAnimate'])

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 50) {
               console.log(this.pageYOffset);
                 scope.boolChangeClass = true;
                 scope.headerScroll = true;
             } else {
                 scope.boolChangeClass = false;
                 scope.headerScroll = false;
             }
            scope.$apply();
        });
    };
});

app.controller('MainController', function($scope){

  $scope.vm = {};
  $scope.elem = {};
  $scope.vm.selection = 'about';
  $scope.vm.aboutShow = true;
  $scope.vm.currentBookShow = false;
  $scope.vm.nextMeetingShow = false;

  $scope.showAboutButton = function () {
    $scope.vm.selection = "about";
    $scope.vm.aboutShow = true;
    $scope.vm.currentBookShow = false;
    $scope.vm.nextMeetingShow = false;
  }

  $scope.showCurrentBookButton = function () {
    $scope.vm.selection = "currentBook";
    $scope.vm.aboutShow = false;
    $scope.vm.currentBookShow = true;
    $scope.vm.nextMeetingShow = false;
  }

  $scope.showNextMeetingButton = function () {
    $scope.vm.selection = "nextMeeting";
    $scope.vm.aboutShow = false;
    $scope.vm.currentBookShow = false;
    $scope.vm.nextMeetingShow = true;
  }
})
