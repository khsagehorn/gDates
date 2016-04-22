app.controller('allMembersController', ['$scope', 'memberDataService',
  function($scope, memberDataService) {
  memberDataService.getAllMembers()
    .then(function(members) {
      $scope.allMembers = members.data.data;
      console.log($scope.allMembers)
  });

  $scope.login = false;

  $scope.getProfile = function(id){
    console.log(id);
    memberDataService.getProfile(id)
      .then(function(member){
        $scope.member = member.data.data;
        console.log($scope.member)
        $scope.login = true;
      })
  };

  // $scope.sortType = '-date';

}]);