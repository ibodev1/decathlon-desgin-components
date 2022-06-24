window.addEventListener("DOMContentLoaded", () => {
  var externalLinks = document.querySelectorAll('a[href^="http"]');
  for (var i = externalLinks.length - 1; i >= 0; i--) {
    console.log(externalLinks[i]);
    externalLinks[i].classList.add("external");
    externalLinks[i].addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        window.open(this.href, "_blank");
      },
      false
    );
  }
});
