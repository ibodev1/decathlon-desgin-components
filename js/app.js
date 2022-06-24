const columnCountChage = () => {
  var cols = document.querySelectorAll(".col");
  var container = document.querySelector(".container");

  console.log(window.innerWidth);
  console.log(cols.length);
  if (window.innerWidth > 1024) {
    if (cols.length == 4) {
      for (let index = 0; index < 8; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    } else if (cols.length == 8) {
      for (let index = 0; index < 4; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    } else if (cols.length == 0) {
      for (let index = 0; index < 12; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    }
  } else if (window.innerWidth < 1024 && window.innerWidth > 376) {
    console.log(cols.length);
    if (cols.length == 12) {
      for (let index = 0; index < 4; index++) {
        const e = container.lastElementChild;
        container.removeChild(e);
      }
    } else if (cols.length == 4) {
      for (let index = 0; index < 4; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    } else if (cols.length == 0) {
      for (let index = 0; index < 8; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    }
  } else if (window.innerWidth < 376) {
    if (cols.length == 8) {
      for (let index = 0; index < 4; index++) {
        const e = container.lastElementChild;
        container.removeChild(e);
      }
    } else if (cols.length == 12) {
      for (let index = 0; index < 8; index++) {
        const e = container.lastElementChild;
        container.removeChild(e);
      }
    } else if (cols.length == 0) {
      for (let index = 0; index < 4; index++) {
        const div = document.createElement("div");
        div.classList.add("col");
        container.appendChild(div);
      }
    }
  }
};

window.addEventListener("DOMContentLoaded", columnCountChage);

window.addEventListener("resize", columnCountChage);
