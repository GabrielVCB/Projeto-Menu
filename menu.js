const produtos = JSON.parse(localStorage.getItem('produtos')) || [
  { nome: 'Coxinha', preco: 7, categoria: 'lanches' },
  { nome: 'Coxinha Frango + Requeijão', preco: 10, categoria: 'lanches' },
  { nome: 'Coxinha Charque', preco: 10, categoria: 'lanches' },
  { nome: 'Croissant', preco: 10, categoria: 'lanches' },
  { nome: 'Empada de Bacalhau', preco: 10, categoria: 'lanches' },
  { nome: 'Empada de Frango', preco: 10, categoria: 'lanches' },
  { nome: 'Pão Delícia', preco: 5, categoria: 'lanches' },
  { nome: 'Esfirra', preco: 5, categoria: 'lanches' },
  { nome: 'Hambúrguer', preco: 10, categoria: 'lanches' },
  { nome: 'Cachorro Quente', preco: 8, categoria: 'lanches' },
  { nome: 'Sanduíche Misto', preco: 7, categoria: 'lanches' },
  { nome: 'Sanduíche Natural', preco: 14, categoria: 'lanches' },
  { nome: 'Tapioca', preco: 10, categoria: 'lanches' },
  { nome: 'Salada de Fruta', preco: 10, categoria: 'lanches' },
  { nome: 'Fatia de Bolo', preco: 9, categoria: 'lanches' },
  { nome: 'Sopa 250ml', preco: 10, categoria: 'lanches' },
  { nome: 'Sopa 500ml', preco: 13, categoria: 'lanches' },
  { nome: 'Cuscuz Recheado', preco: 13, categoria: 'lanches' },

  { nome: 'Água', preco: 2, categoria: 'bebidas' },
  { nome: 'Água Indaiá', preco: 3, categoria: 'bebidas' },
  { nome: 'Água com Gás', preco: 3, categoria: 'bebidas' },
  { nome: 'Café Pequeno', preco: 3, categoria: 'bebidas' },
  { nome: 'Café Grande', preco: 5, categoria: 'bebidas' },
  { nome: 'Café com Leite', preco: 5, categoria: 'bebidas' },
  { nome: 'Suco', preco: 5, categoria: 'bebidas' },
  { nome: 'Suco com Leite', preco: 7, categoria: 'bebidas' },
  { nome: 'Refrigerante Mini', preco: 5, categoria: 'bebidas' },
  { nome: 'Refrigerante Lata', preco: 6, categoria: 'bebidas' },
  { nome: 'H2O Limoneto', preco: 6, categoria: 'bebidas' }
];

const container = document.getElementById('menu-container');
const categorias = ['lanches', 'bebidas'];

categorias.forEach(cat => {
  const titulo = document.createElement('h2');
  titulo.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
  container.appendChild(titulo);

  const lista = document.createElement('ul');
  produtos.filter(p => p.categoria === cat).forEach(produto => {
    const item = document.createElement('li');
    item.className = 'produto';
    item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    lista.appendChild(item);
  });
  container.appendChild(lista);
});
