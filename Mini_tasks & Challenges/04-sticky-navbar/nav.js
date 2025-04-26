document.addEventListener("DOMContentLoaded", function () {
  const head_nav = document.querySelector("header");

  function toggoleheadbar() {
    // console.log(123);
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
      head_nav.classList.add("head");
    } else {
      head_nav.classList.remove("head");
    }
  }

  window.addEventListener("scroll", toggoleheadbar);
});
