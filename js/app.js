const navBtn = document.querySelectorAll(".btn");

function pageManipulation() {
  navBtn.forEach(function (element) {
    element.addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].classList.remove("active-btn");
      console.log(this);
      this.classList.add("active-btn");
    });
  });
}

pageManipulation();
