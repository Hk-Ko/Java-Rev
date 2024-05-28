const person = { name: "jude" };

function sayHi(age) {
  return `${this.name}  ${age}`;
}

console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

const age = 20;

var person2 = {
  name: "Marcus",
  age: 24,
  getAge: function () {
    return this.age;
  },
};

var person3 = { age: 27 };

console.log(person2.getAge.call(person3));

var status = "Hello";

setTimeout(() => {
  var status = "World";

  const data = {
    status: "Jude",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

//Question -Call printAnimals such that it prints all animals in object

const animals = [
  { species: "Lions", name: "King" },
  { species: "Whales", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.species + ": " + this.name);
  };
  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//question - Append an array to another array

const array = ["a", "b", "c"];
const elements = [0, 1, 2, 3];

array.push.apply(array, elements);

console.log(array);

//question - using apply to enhance built-in functions

const numbers = [1, 2, 3, 4, 5];

console.log(Math.max.apply(null, numbers));
console.log(Math.min.apply(null, numbers));

//question -bound function

function f() {
  console.log(this);
}

let hello = {
  g: f.bind(null),
};

hello.g();

//question - bind chaining

function q() {
  console.log(this.name);
}

q = q.bind({ name: "Jude" }).bind({ name: "Marcus" });

q();

//pollyfill for call method

let car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callabale");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myCall(car1, "$", 500000);

//pollyfill for apply method

let car2 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar1(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callabale");
  }

  if (!Array.isArray(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar1.myApply(car2, ["$", 500000]);

//pollyfill for bind method

let car3 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar2(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar2.myBind(car3);

console.log(newFunc("$",500000));


