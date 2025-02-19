function toggleDarkMode() {
    document.body.classList.toggle("light-mode");
    let container = document.querySelector(".container");
    let textElements = document.querySelectorAll("h1, h2, p, li, a");
    
    if (document.body.classList.contains("light-mode")) {
        document.body.style.background = "#fff";
        container.style.background = "#fff";
        container.style.color = "#000";
        textElements.forEach(el => el.style.color = "#000");
    } else {
        document.body.style.background = "#222";
        container.style.background = "#222";
        container.style.color = "#f4f4f4";
        textElements.forEach(el => el.style.color = "#f4f4f4");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("themeColor");
    const downloadButton = document.getElementById("downloadResume");
    let textElements = document.querySelectorAll("h1, h2, p, li, a");
    
    // Definir o tema padrão como escuro
    document.body.style.background = "#222";
    document.body.style.color = "#f4f4f4";
    document.querySelector(".container").style.background = "#222";
    document.querySelector(".container").style.color = "#f4f4f4";
    textElements.forEach(el => el.style.color = "#f4f4f4");
    
    // Alterar o tema ao escolher uma nova cor
    colorPicker.addEventListener("input", function(event) {
        let selectedColor = event.target.value;
        document.documentElement.style.setProperty('--primary-color', selectedColor);
        document.querySelector(".container").style.background = selectedColor;
        
        // Manter as cores do texto legíveis
        textElements.forEach(el => el.style.color = "#000");
        if (selectedColor === "#000" || selectedColor === "#222" || selectedColor === "#333") {
            textElements.forEach(el => el.style.color = "#f4f4f4");
        }
        
        // Atualizar a cor do fundo do seletor para melhor visibilidade
        colorPicker.style.background = selectedColor;
        colorPicker.style.border = "2px solid #fff";
    });

    downloadButton.addEventListener("click", function() {
        let link = document.createElement('a');
        link.href = 'pdf/Leonardo_Milos_Resume.pdf'; 
        link.download = 'pdf/Leonardo_Milos_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});