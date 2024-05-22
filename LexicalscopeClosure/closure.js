function makfunc() {
  var name = "morzilla";
  function displayName() {
    console.log(name);
  }
  return displayName();
}

var myfunc = makfunc();

myfunc();
