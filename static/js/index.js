let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

window.addEventListener("scroll", e => {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
  } else {
      navbar.classList.remove("sticky");
  }
})

