// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

//What is the output of following code

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//what is JSON.stringify and JSON.parse?

const user = {
  name: "Jude",
  age: 27,
};

const strObj = JSON.stringify(user)

localStorage.setItem('test',strObj)

console.log(JSON.parse(localStorage.getItem('test')));

//what is the output

const user1 = {name:'Lydia', age : 22}

const admin ={admin:true , ...user1}

console.log(admin);

//what is the output

const settings = {
    name : 'Marcus',
    level : 19 ,
    health : 22
}

const data = JSON.stringify(settings , ["level","health"])

console.log(data);

//what is output 

const shape ={
    radius : 20,
    diameter(){
        return this.radius *2 
    },
    perimeter :()=>2*Math.PI * this.radius
}

console.log(shape.diameter());
console.log(shape.perimeter());