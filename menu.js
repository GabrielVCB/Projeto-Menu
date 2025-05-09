document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('menu-container');
    const produtos = getProdutos();
  
    if (produtos.length === 0) {
      addProduto({ nome: 'Coxinha', preco: 7.00 });
      addProduto({ nome: 'Enrolado de Salsicha', preco: 7.00 });
      addProduto({ nome: 'Pão com Carne', preco: 10.00 });
    }
  
    renderMenu();
  
    document.getElementById('admin-btn').onclick = () => {
      const senha = prompt('Digite a senha do administrador:');
      if (senha === '1234') {
        window.location.href = 'admin.html';
      } else {
        alert('Senha incorreta');
      }
    };
  
    function renderMenu() {
      container.innerHTML = '';
      getProdutos().forEach(p => {
        const el = document.createElement('div');
        el.className = 'card';
        el.innerHTML = `<strong>${p.nome}</strong> <span>R$ ${Number(p.preco).toFixed(2)}</span>`;
        container.appendChild(el);
      });
    }
  });