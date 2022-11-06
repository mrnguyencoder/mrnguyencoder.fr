const toggles = document.querySelectorAll(".toggle");
toggles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("toggle--expanded");
  })
);