document.addEventListener("DOMContentLoaded", function () {
  const head = document.querySelector("header");
  function toggoleheadbar() {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      head.classList.add("head");
    } else {
      head.classList.remove("head");
    }
  }
  window.addEventListener("scroll", toggoleheadbar);
});
