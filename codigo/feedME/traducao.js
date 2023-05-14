// Defina o idioma padrão
let currentLanguage = localStorage.getItem("language") || "pt";

// Carregue as traduções apropriadas
let translations;
if (currentLanguage === "pt") {
    fetch("translations_pt.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
} else {
    fetch("translations_en.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
}

// Função para traduzir o texto de um elemento HTML
function translateElement(element, translationKey) {
    const translation = translations[translationKey];
    if (translation) {
        element.textContent = translation;
    }
}



// Função para traduzir todos os elementos do documento
function translateAll() {
    // Traduzir o título da página
    translateElement(document.querySelector("title"), "title");

    // Traduzir os botões de idioma
    const buttons = document.querySelectorAll(".translate-button");
    buttons.forEach(button => {
        if (currentLanguage === "pt") {
            translateElement(button, "translateToEn");
        } else {
            translateElement(button, "translateToPt");
        }
    });

    // Traduzir o resto dos elementos
    const elements = document.querySelectorAll("[Id_traducao]");
    elements.forEach(element => {
        const translationKey = element.getAttribute("Id_traducao");
        translateElement(element, translationKey);
    });
}

// Alterne o idioma quando um botão for clicado
document.querySelectorAll(".translate-button").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        if (currentLanguage === "pt") {
            currentLanguage = "en";
            localStorage.setItem("language", "en");
            fetch("translations_en.json")
                .then(response => response.json())
                .then(data => {
                    translations = data;
                    translateAll();
                });
        } else {
            currentLanguage = "pt";
            localStorage.setItem("language", "pt");
            fetch("translations_pt.json")
                .then(response => response.json())
                .then(data => {
                    translations = data;
                    translateAll();
                });
        }
    });
});