// mobile view menu
document.addEventListener("DOMContentLoaded", function () {
  const toggle_button = document.querySelector(".navbar__mobile-menu-toggle");
  const mobile_menu = document.querySelector(".navbar__mobile-menu-stack");

  toggle_button.addEventListener("click", function () {
    mobile_menu.classList.toggle("active");
  });
  // video modal close and open

  const modal_section = document.getElementById("video-modal");
  const video_button = document.querySelector(".preview__video-button");
  const video_close_button = document.querySelector(".modal__close-button");
  const video_player = document.querySelector("#video-player");

  video_button.addEventListener("click", function () {
    modal_section.style.display = "block";
    video_player.src =
      "https://www.youtube.com/embed/8sXRyHI3bLw?si=ntLFrldO8f94YJM1";

    // for close video when clicked
    video_close_button.addEventListener("click", function () {
      modal_section.style.display = "none";
      video_player.src = "";
    });

    // close outsite the video frame
    window.addEventListener("click", function (event) {
      if (event.target == modal_section) {
        modal_section.style.display = "none";
        video_player.src = "";
      }
    });
  });
});
// header navigation scroll transparent
window.addEventListener("scroll", function () {
  const navbar_head_scroll = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar_head_scroll.classList.add("navbar--scroll");
  } else {
    navbar_head_scroll.classList.remove("navbar--scroll");
  }
});
