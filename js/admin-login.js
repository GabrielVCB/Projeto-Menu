document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  // Verifica se já está logado
  if (localStorage.getItem("adminLoggedIn") === "true") {
    window.location.href = "admin.html";
  }

  loginForm.onsubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Credenciais padrão (em um sistema real, isso seria armazenado de forma segura no backend)
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");
      window.location.href = "admin.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };
});
