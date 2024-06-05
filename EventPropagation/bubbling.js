const div = document.querySelector("div");
const form = document.querySelector("form");
const btn = document.querySelector("button");

div.addEventListener("click", function () {
  alert("div");
});
div.addEventListener("click", function () {
  alert("form");
});div.addEventListener("click", function () {
  alert("btn");
});
