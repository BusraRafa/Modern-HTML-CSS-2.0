document.addEventListener("DOMContentLoaded", function () {
  const toggle_button = document.querySelector(".navbar__mobile-menu-toggle");
  const mobile_menu = document.querySelector(".navbar__mobile-menu-stack");

  toggle_button.addEventListener("click", function () {
    mobile_menu.classList.toggle("active");
  });
});
