const user = {
  age: 35,
  name: "Jude",
};

delete user.age;

console.log(user);

const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);

const user1 = {
  name: "jude",
  age: 30,
  Marcus: true,
};

console.log(user1["Marcus"]);

const property = "First Name";
const name = "Marcus";

const user2 = {
  [property]: name,
};

console.log(user2);

const user3 = {
  name: "Jay",
  age: 30,
  isTotallyAwesome: true,
};

for (key in user3) {
  console.log(user3[key]);
}
