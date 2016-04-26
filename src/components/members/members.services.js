(function () {  

  "use strict";

  app.service('memberDataService', ['$rootScope', '$http', function($rootScope, $http){

    var api = "https://galvanize-student-apis.herokuapp.com/gdating/"

    return {
      getAllMembers: function(offset){
        return $http.get(api+"members"+"?limit=30&offset="+offset)
        .then(function(res){
          console.log('res', res);
          return res;
        })
        .catch(function(err){
          console.log('err', res);
          return err;
        });
      },


      getProfile: function(id){
        return $http.get(api+"members/"+id)
      }
    };



  }])
})();