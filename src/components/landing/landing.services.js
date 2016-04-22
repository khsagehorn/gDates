app.service('loginDataService', ['$rootScope', '$http', function($rootScope, $http){

  var api = "https://galvanize-student-apis.herokuapp.com/gdating/";

  return {
    register: function(){
      return $http.post(api+"members")
      .then(function())
    }
  }

}])