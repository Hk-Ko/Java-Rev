const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function () {
    alert("div");
  },
  {
    capture: true,
  }
);
div.addEventListener(
  "click",
  function () {
    alert("form");
  },
  {
    capture: true,
  }
);
div.addEventListener(
  "click",
  function () {
    alert("button");
  },
  {
    capture: true,
  }
);
