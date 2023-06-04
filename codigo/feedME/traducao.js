let currentLanguage;
let storedLanguage = localStorage.getItem("language");
if (storedLanguage && ["Pt", "En", "It", "Jp", "Fr"].includes(storedLanguage)) {
  currentLanguage = storedLanguage;
} else {
  currentLanguage = "Pt"; // ou qualquer outro valor padrão desejado
}
 
// Carregue as traduções apropriadas
let translations;

if (currentLanguage === "Pt") {
    fetch("translations_pt.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
} else if (currentLanguage === "En") {
    fetch("translations_en.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
} else if (currentLanguage === "It") {
    fetch("translations_it.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
} else if (currentLanguage === "Jp") {
    fetch("translations_jp.json")
        .then(response => response.json())
        .then(data => {
            translations = data;
            translateAll();
        });
} else if (currentLanguage === "Fr") {
    fetch("translations_fr.json")
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

    // Traduzir o resto dos elementos
    const elements = document.querySelectorAll("[Id_traducao]");
    elements.forEach(element => {
        const translationKey = element.getAttribute("Id_traducao");
        translateElement(element, translationKey);
    });
}


document.querySelectorAll(".translate-button").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const targetLanguage = button.getAttribute("Id_traducao");
        if (targetLanguage === currentLanguage) {
            return;
        }
        currentLanguage = targetLanguage;
        localStorage.setItem("language", targetLanguage);
        fetch(`translations_${targetLanguage.toLowerCase()}.json`)
            .then(response => response.json())
            .then(data => {
                translations = data;
                translateAll();
            });
    });
});