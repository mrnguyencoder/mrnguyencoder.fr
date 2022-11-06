const collapses = document.querySelectorAll(".collapse");
collapses.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapse--expanded");
  })
);