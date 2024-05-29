//Promise

console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("Subscribe to Roadside Coder");
    else reject(new Error("Why aren't you subscribed to Roadside Coder"));
  }, 2000);
});

sub
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("finish");

//what is the output

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

//what is the output

console.log("start");

const promise2 = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});

promise2.then((res) => {
  console.log("Result", res);
});

console.log("end");

//what is the output

console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

//Promise Chaning

const firstPromise = new Promise((resolve, rejcet) => {
  resolve("first!");
});

const secondPromise = new Promise((resolve, rejcet) => {
  resolve(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });
