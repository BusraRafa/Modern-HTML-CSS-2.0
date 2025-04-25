const button_name = document.querySelector("#button");
const heading = document.querySelector("h1");
button_name.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  heading.classList.toggle("light");
});
