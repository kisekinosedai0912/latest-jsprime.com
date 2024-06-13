function toggleMenu() {
    let menu = document.getElementById("navbarNav");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

let navLinks = document.querySelectorAll("#navbarNav .nav-link");

navLinks.forEach(function(navLink) {
    navLink.addEventListener("click", function() {
        toggleMenu();
    });
});

function load(){
    let menu = document.getElementById("mobile-menu");
    menu.style.display = "none";
}