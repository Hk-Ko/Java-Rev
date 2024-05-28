let obj = { name: "Jude" };

function person(age,professional) {
  return " hello " + this.name + " is " + age + " is an " + professional;
}

console.log(person.apply(obj, [24, "Web Developer"]));
