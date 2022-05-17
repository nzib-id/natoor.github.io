/* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
function navbar() {
  document.getElementById("navbar-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".res-button")) {
    var Dropdown = document.getElementById("navbar-dropdown");
    if (Dropdown.classList.contains("show")) {
      Dropdown.classList.remove("show");
    }
  }
};
