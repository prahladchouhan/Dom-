var arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "Blue",
  },
  {
    team: "MI",
    primary: "Blue",
    secondary: "Gold",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "DC",
    primary: "blue",
    secondary: "red",
  },
  {
    team: "PSK",
    primary: "Red",
    secondary: "gold",
  },
  {
    team: "LSG",
    primary: "lightblue",
    secondary: "blue",
  },
  {
    team: "GT",
    primary: "blue",
    secondary: "sliver",
  },
  {
    team: "RR",
    primary: "pink",
    secondary: "Blue",
  },
  {
    team: "RCB",
    primary: "Red",
    secondary: "blue",
  },
];

var btn =document.querySelector("button");

var h2=document.querySelector("h2");

btn.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr.length);
    var winner=arr[num];
    h2.innerHTML=winner.team;
    h2.style.backgroundColor=winner.primary;
    h2.style.color=winner.secondary;

})
