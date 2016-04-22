app.service('profileDataService', ['$rootScope', '$http', function($rootScope, $http){

  var api = "https://galvanize-student-apis.herokuapp.com/gdating/";
  var id = "571667935ae850110075ab21"

  return {
    getProfile: function(){
      return $http.get(api+"members/"+id)
    }

  }
}])