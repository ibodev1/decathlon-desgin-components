const number = document.getElementById("number");
const negative = document.getElementById("negative");
const positive = document.getElementById("positive");

negative.addEventListener("click", () => {
  if (number.value > 0) {
    number.value = parseInt(number.value) - 1;
  }
});

positive.addEventListener("click", () => {
  if (number.value >= 0 && number.value < 99) {
    number.value = parseInt(number.value) + 1;
  }
});
