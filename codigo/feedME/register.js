

document.getElementById("register").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    
    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
   
    const user = {
        username,
        email,
        password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    
    alert("User Registered! Please sign in.");
    
    
    window.location.href = "login.html";
});

document.getElementById("backToLogin").addEventListener("click", function() {
    window.location.href = "login.html";
});
