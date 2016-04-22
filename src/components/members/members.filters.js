//convert snake_case to kebab-case
app.filter('ageFilter', function () {
  return function(input){
    console.log(input);
    str = input.slice(0,5);
    age = 2016 - (parseInt(str, 10));

    return age;
  };
});
