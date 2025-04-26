document.addEventListener("DOMContentLoaded", function () {
  const toggle_btn = document.querySelector(".mobile-menu-toggle");
  const mobile_menu = document.querySelector(".mobile-menu-item");

  toggle_btn.addEventListener("click", function () {
    mobile_menu.classList.toggle("active");
  });
});
