document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    
    const user = JSON.parse(localStorage.getItem("user"));
    
    
    if(user && user.username === username && user.password === password) {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Erro no login. Por favor, verifique seu usuário e senha.");
    }
});
