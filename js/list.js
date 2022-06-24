const accordion = document.querySelectorAll("#accordion");

accordion.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("active");
  });
});
