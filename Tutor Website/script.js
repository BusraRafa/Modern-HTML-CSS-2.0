document.addEventListener("DOMContentLoaded", function () {
  const toggle_mobile_button = document.querySelector(".toggle-bar");

  const mobile_nav_bar = document.querySelector(".mobile-nav-bar");

  toggle_mobile_button.addEventListener("click", function () {
    mobile_nav_bar.classList.toggle("active");
  });
});

// head-bar trasparent
window.addEventListener("scroll", function () {
  const head_bar_scroll = document.querySelector("header");
  if (window.scrollY > 0) {
    head_bar_scroll.classList.add("head-bar-scroll");
  } else {
    head_bar_scroll.classList.remove("head-bar-scroll");
  }
});
