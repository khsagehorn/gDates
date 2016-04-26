app.service('navDataService', ['$rootScope', '$http', function($rootScope, $http){

  var api = "https://galvanize-student-apis.herokuapp.com/gdating/";

  return {
    getRandom: function(){
      return $http.get(api+"members/")
      .then(function(res){
        var data = res.data.data;
        return data[Math.floor(Math.random()*data.length)];
      })
      .catch(function(err){
        console.log('err', res);
        return err;
      });
    }

  }
}])