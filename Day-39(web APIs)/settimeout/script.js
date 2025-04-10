var btn = document.querySelector("button");

var h2 = document.querySelector("h2");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    h2.innerHTML = "Adding friend...";
    h2.style.color = "gold";
    btn.innerHTML = "Adding...";
    setTimeout(function () {
      h2.innerHTML = "Friends";
      h2.style.color = "green";
      btn.innerHTML = "remove friend";
      flag = 1;
    }, 2000);
  } else {
    h2.innerHTML = "Strengers";
    h2.style.color = "red";
    btn.innerHTML = "Add friend";
    flag = 0;
  }
});
