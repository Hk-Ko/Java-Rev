let obj = { name: "Jude" };

function person(age, professional) {
  return " hello " + this.name + " is " + age + " is an " + professional;
}

const bindFunc = person.bind(obj)

console.log(bindFunc(24, "Web Developer"));
console.log(bindFunc(33, "Web Developer"));
