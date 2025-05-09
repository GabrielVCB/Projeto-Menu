const STORAGE_KEY = 'produtos_cardapio';

function getProdutos() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function setProdutos(produtos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(produtos));
}

function addProduto(produto) {
  const produtos = getProdutos();
  produto.id = Date.now();
  produtos.push(produto);
  setProdutos(produtos);
}

function updateProduto(id, dados) {
  const produtos = getProdutos().map(p => p.id == id ? {...p, ...dados} : p);
  setProdutos(produtos);
}

function deleteProduto(id) {
  const produtos = getProdutos().filter(p => p.id != id);
  setProdutos(produtos);
}