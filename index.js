const buttons = document.querySelectorAll(".accordion");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;

    panel.style.display.toggle("block")

    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
    
  });
}