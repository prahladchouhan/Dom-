var navbar=document.querySelector(".navbar");

let prevScroll = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > prevScroll) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }

  prevScroll = currentScroll;
});