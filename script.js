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

document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("themeColor");
    const downloadButton = document.getElementById("downloadResume");

    // Alterar o tema ao escolher uma nova cor
    colorPicker.addEventListener("input", function(event) {
        let selectedColor = event.target.value;
        document.documentElement.style.setProperty('--primary-color', selectedColor);
        document.querySelector(".container").style.background = selectedColor;
        document.querySelector("h1").style.color = selectedColor;
        document.querySelector("h2").style.color = selectedColor;
        
        // Atualizar a cor do fundo do seletor para melhor visibilidade
        colorPicker.style.background = selectedColor;
        colorPicker.style.border = "2px solid #fff";
    });

    // Gerar PDF do portfólio
    downloadButton.addEventListener("click", function() {
        let link = document.createElement('a');
        link.href = 'pdf/Leonardo_Milos_Resume.pdf'; // Certifique-se de que o PDF está na pasta correta
        link.download = 'pdf/Leonardo_Milos_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});