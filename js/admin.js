document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("admin-container");
  const form = document.getElementById("add-form");

  renderAdmin();

  form.onsubmit = (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    addProduto({ nome, preco });
    form.reset();
    renderAdmin();
  };

  document.getElementById("voltar").onclick = () => {
    window.location.href = "index.html";
  };

  function renderAdmin() {
    container.innerHTML = "";
    getProdutos().forEach((p) => {
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `
          <input type="text" value="${p.nome}" id="nome-${p.id}">
          <input type="number" value="${p.preco}" id="preco-${p.id}" step="0.01">
          <button onclick="editProduto(${p.id})">Salvar</button>
          <button onclick="deleteProduto(${p.id}); location.reload();">Excluir</button>
        `;
      container.appendChild(el);
    });
  }
});

function editProduto(id) {
  const nome = document.getElementById(`nome-${id}`).value;
  const preco = parseFloat(document.getElementById(`preco-${id}`).value);
  updateProduto(id, { nome, preco });
  location.reload();
}
