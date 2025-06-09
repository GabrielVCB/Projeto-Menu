// Função para obter todos os produtos
function getProdutos() {
  const produtos = localStorage.getItem("produtos");
  return produtos ? JSON.parse(produtos) : [];
}

// Função para adicionar um novo produto
function addProduto(produto) {
  const produtos = getProdutos();
  produto.id = Date.now(); // Gera um ID único
  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Função para atualizar um produto
function updateProduto(id, novoProduto) {
  const produtos = getProdutos();
  const index = produtos.findIndex((p) => p.id === id);
  if (index !== -1) {
    produtos[index] = { ...produtos[index], ...novoProduto };
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
}

// Função para remover um produto
function removeProduto(id) {
  const produtos = getProdutos();
  const novosProdutos = produtos.filter((p) => p.id !== id);
  localStorage.setItem("produtos", JSON.stringify(novosProdutos));
}
