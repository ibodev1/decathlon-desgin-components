const textarea = document.getElementById("textarea");
const wrapper = document.getElementById("textarea-wrapper");
const textAreaErrorMessage = document.querySelector(
  ".textarea-wrapper > .info > .errorMessage"
);
const count = document.getElementById("count");
var currentLength = 0;
var maxLength = 200;

textarea.addEventListener("input", (event) => {
  const target = event.currentTarget;
  maxLength = target.getAttribute("maxlength")
    ? parseInt(target.getAttribute("maxlength"))
    : 200;
  currentLength = target.value.length;
  count.innerHTML = `${currentLength}/${maxLength}`;
  if (currentLength >= maxLength) {
    wrapper.classList.add("error");
    textAreaErrorMessage.innerHTML = "You have reached the maximum length";
    textAreaErrorMessage.classList.add("show");
    textAreaErrorMessage.classList.remove("hide");
  } else {
    wrapper.classList.remove("error");
    textAreaErrorMessage.innerHTML = "";
    textAreaErrorMessage.classList.remove("show");
    textAreaErrorMessage.classList.add("hide");
  }
});
