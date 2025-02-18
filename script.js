function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let container = document.querySelector(".container");
    if (document.body.classList.contains("dark-mode")) {
        container.style.background = "#222";
        container.style.color = "#f4f4f4";
    } else {
        container.style.background = "#333";
        container.style.color = "#f4f4f4";
    }
}
