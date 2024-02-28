const menu = document.getElementById("icon-menu");
const sideNav = document.getElementById("sidebar-sm");

document.addEventListener("click", function(e) {
  if (!menu.contains(e.target) && !sideNav.contains(e.target)) {
    sideNav.classList.add("hidden");
    sideNav.classList.remove("flex");
  } else {
    
    sideNav.classList.remove("hidden");
    sideNav.classList.add("flex");
  }
});
