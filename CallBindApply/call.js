//what is call?

let obj= { name: "Jude" };

function person(age){
    return " hello " + this.name + " is " + age
}

console.log(person.call(obj,24));

