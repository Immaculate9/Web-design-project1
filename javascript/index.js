
addActiveNav();

function addActiveNav() {
  var path = window.location.href;
  document.querySelectorAll(".navbar-link").forEach((el) => {
    if (el.href === path) {
      el.classList.add("active");
    }
  });
}
