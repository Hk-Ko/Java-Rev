function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(5)(6));

//Question 1

function sum(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(sum(2)(4)(6));

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid Operation";
    };
  };
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));

//Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(2)(4)(6)(8)(10)());

//partial application

function par(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = par(10);

console.log(x(5, 6));
console.log(x(7, 8));

//manipulating dom

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");
updateHeader("Hello Roadside Coder");

// convert function(a,b,c) into function(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sam = (a, b, c, d) => a + b + c + d;

const totalsam = curry(sam)

console.log(totalsam(1)(2)(3)(4));
console.log(totalsam(1)(2)(3)(4));