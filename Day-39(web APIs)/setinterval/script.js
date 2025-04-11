var btn = document.querySelector("button");
var h4 = document.querySelector("h4");
var growth = document.querySelector("#growth");

btn.addEventListener("click", function () {
  var grow = 0;
  var int = setInterval(function () {
    grow++;
    h4.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 50);

  setTimeout(function () {
    clearInterval(int);
    btn.style.opacity = 50 + "%";
    btn.innerHTML = "Downloaded";
  }, 5000);
});
