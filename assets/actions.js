document.addEventListener("DOMContentLoaded",() => {
    const menuBtn = document.querySelector(".hamburguer");
    const menuBtnIcon = document.querySelector(".hamburguer i");
    const scrollingNavbar = document.querySelector(".navbar__links");


    menuBtn.onclick = function() {
        if (scrollingNavbar.classList.contains("active")) {
            CloseScrollingNavbar();
        } else {
            OpenScrollingNavbar();
        }
    }

    // cerrar navbar al cambiar window size
    window.addEventListener("resize", CloseScrollingNavbar);

    // cerrar navbar al hacer click en cualquier link
    document.querySelectorAll(".navbar__links li a").forEach(function(link) {
        link.onclick = CloseScrollingNavbar;
    });

    // cerrar navbar
    function CloseScrollingNavbar(){
        scrollingNavbar.classList.remove("active");
        menuBtnIcon.classList = "fa-solid fa-bars"

    };

    // abrir navbar
    function OpenScrollingNavbar(){
        scrollingNavbar.classList.add("active");
        menuBtnIcon.classList = "fa-solid fa-xmark"

    };
})


// git config --global pull.rebase false