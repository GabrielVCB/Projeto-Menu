document.addEventListener("DOMContentLoaded", () => {
  // Verifica se está logado
  if (localStorage.getItem("adminLoggedIn") !== "true") {
    window.location.href = "admin-login.html";
    return;
  }

  const form = document.getElementById("add-form");

  form.onsubmit = (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;

    if (nome && preco && categoria) {
      addProduto({ nome, preco, categoria });
      alert("Produto adicionado com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  document.getElementById("voltar").onclick = () => {
    window.location.href = "index.html";
  };
});
