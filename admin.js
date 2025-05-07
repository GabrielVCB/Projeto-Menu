const form = document.getElementById('product-form');
const lista = document.getElementById('lista-produtos');

function carregarProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  lista.innerHTML = '';

  produtos.forEach((p, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} (${p.categoria})
      <button onclick="editarProduto(${i})">Editar</button>
      <button onclick="excluirProduto(${i})">Excluir</button>
    `;
    lista.appendChild(li);
  });
}

function salvarProduto(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const categoria = document.getElementById('categoria').value;

  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  if (form.dataset.editando != null) {
    produtos[form.dataset.editando] = { nome, preco, categoria };
    delete form.dataset.editando;
  } else {
    produtos.push({ nome, preco, categoria });
  }

  localStorage.setItem('produtos', JSON.stringify(produtos));
  form.reset();
  carregarProdutos();
}

function editarProduto(index) {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const produto = produtos[index];

  document.getElementById('nome').value = produto.nome;
  document.getElementById('preco').value = produto.preco;
  document.getElementById('categoria').value = produto.categoria;
  form.dataset.editando = index;
}

function excluirProduto(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.splice(index, 1);
  localStorage.setItem('produtos', JSON.stringify(produtos));
  carregarProdutos();
}

form.addEventListener('submit', salvarProduto);
carregarProdutos();
