//convert snake_case to kebab-case
app.filter('ageFilter', function () {
  return function (input) {
    var str = input.slice(0,5);
    var age = 2016 - (parseInt(str, 10));

    return age;


  };
});

app.filter('interests', function(){
  return function (input) {
    var arr = [];
    input.forEach(function(input){
      switch (input) {
        case 0:
          input = "Beef";
          arr.push(input);
          break;
        case 1:
          input = "Pork";
          arr.push(input);
          break;
        case 2:
          input = "Sausage";
          arr.push(input);
          break;
        case 3:
          input = "Seitan"
          arr.push(input);
          break;
      }
    });
    arr = arr.join(' | ');
    return arr;
  };
})
