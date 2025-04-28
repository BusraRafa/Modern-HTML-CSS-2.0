document.addEventListener("DOMContentLoaded", function () {
  const toggle_button = document.querySelector(".navbar__mobile-menu-toggle");
  const mobile_menu = document.querySelector(".navbar__mobile-menu-stack");

  toggle_button.addEventListener("click", function () {
    mobile_menu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar_head_scroll = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar_head_scroll.classList.add("navbar--scroll");
  } else {
    navbar_head_scroll.classList.remove("navbar--scroll");
  }
});
