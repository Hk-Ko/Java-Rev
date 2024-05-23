function makfunc() {
  var name = "morzilla";
  function displayName() {
    console.log(name);
  }
  return displayName();
}

var myfunc = makfunc();

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

let addSix = createBase(6);

addSix(10);
addSix(21);
