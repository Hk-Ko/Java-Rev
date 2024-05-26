//Explain "this" keyword

this.a = 5;

function getParams() {
  console.log(this.a);
}

getParams();

let user = {
  name: "Jude",
  age: 27,
  childHoodName: {
    newName: "Marcus",
    getDetails() {
      console.log(this.newName, "and", this.name);
    },
  },
};

user.childHoodName.getDetails();

let user1 = {
  name: "Jay",
  age: 27,
  getDetails: () => {
    console.log(this.name);
  },
};

user1.getDetails();

let user2 = {
  name: "ko",
  age: 27,
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

user2.getDetails();

class hello {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new hello("Jude");

User.getName();

let user4 = {
  firstname: "Htun",
  getName() {
    const firstName = "Ko";
    console.log(this.firstname);
  },
};

user4.getName();

function makeUser() {
  return {
    name: "Koz",
    ref: this,
  };
}

let User1 = new makeUser();

console.log(User1.ref.name);

const user5 = {
  name: "Joker",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user5.logMessage, 1000);

//Create object calculator

let calculator = {
  read() {
    this.a = +prompt("a =", 0);
    this.b = +prompt("b =", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

//implement this code

const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this;
  },
  mul(a) {
    this.total *= a;
    return this;
  },
  subs(a) {
    this.total -= a;
    return this;
  },
};

const result = calc.add(10).mul(5).subs(30).add(10)

console.log(result.total);
