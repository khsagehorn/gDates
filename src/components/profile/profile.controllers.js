app.controller('showProfileController', ['$scope', 'profileDataService',
    function($scope, profileDataService){
      profileDataService.getProfile()
      .then(function(member){
        $scope.member = member.data.data;
        console.log($scope.member);
      });
    }])