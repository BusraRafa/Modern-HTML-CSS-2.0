document.addEventListener("DOMContentLoaded", function () {
  const toggle_mobile_button = document.querySelector(".toggle-bar");

  const mobile_nav_bar = document.querySelector(".mobile-nav-bar");

  toggle_mobile_button.addEventListener("click", function () {
    mobile_nav_bar.classList.toggle("active");
  });
});
