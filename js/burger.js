const collapse = document.querySelector(".navbar-collapse");
const open_button = document.querySelector(".navbar-toggler-icon");
const close_button = document.querySelector(".btn-close");
const body = document.querySelector("body");

open_button.addEventListener("click", function () {
    body.classList.add("burger-open");
  });

close_button.addEventListener("click", function () {
    collapse.classList.remove("show");
    body.classList.remove("burger-open");
});