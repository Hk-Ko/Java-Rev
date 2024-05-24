//what is distructulring

let user = {
  name: "Jude",
  age: 27,
  fullname: {
    first: "Marcus",
    last: "Jude",
  },
};

const name = "Roadside Coder";

const {
  fullname: { first },
} = user;

console.log(first);

//what is the output

let c = { greeting: "Hey" };

let d;

d = c;

c.greeting = "Hello";

console.log(d.greeting);

//what is the output

console.log({ a: 1 } === { a: 1 });
console.log({ a: 1 } == { a: 1 });

//what is the output

let person = { name: "Jude" };

const members = [person];

person = null;

console.log(members);

//what is the output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

//How to deep copy/clone an object?

let user1 = {
  name: "Jude",
  age: 27,
};

// const objClone = Object.assign({},user1)
// const objClone = JSON.parse(JSON.stringify(user1))

const objClone = {...user1}
objClone.name = 'Marcus'

console.log(user1,objClone);
