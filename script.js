menuToggle = () => {
    let nav = document.getElementById("navbar");
    let bars = document.getElementById("menu-open");
    if (nav.style.display === "none") {
        nav.style.display = "block";
        bars.style.display = "none";
    } else {
        nav.style.display = "none";
        bars.style.display = "block";
    }
}