const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("nav .menu");
hamburger.onclick = () => {
  menu.classList.toggle("closed");
};

let light_icon = document.querySelector(".light_icon");
let dark_icon = document.querySelector(".dark_icon");

light_icon.onclick = () => {
  document.documentElement.style.colorScheme = "dark";
  light_icon.style.display = "none";
  dark_icon.style.display = "block";
};

dark_icon.onclick = () => {
  document.documentElement.style.colorScheme = "light";
  dark_icon.style.display = "none";
  light_icon.style.display = "block";
};
