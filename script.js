let produtos = [];
async function carregar() {
    const resposta = await fetch('https://dummyjson.com/products');  
    const dados = await resposta.json();
    produtos = dados.products;
    exibir(produtos);
}
function exibir(lista) {
    const container = document.getElementById('produtos');
    container.innerHTML = '';
    
    lista.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');
                      card.innerHTML = `
            <img src="${produto.thumbnail}" alt="${produto.title}">
            <h3>${produto.title}</h3>
            <p>Preço: $${produto.price}</p>
        `;
        container.appendChild(card);        
    });}
function pesquisar() {
        const texto = document.getElementById('campoBusca').value.toLowerCase();
         const resultado = produtos.filter(produto => {
        return produto.title.toLowerCase().includes(texto);
    });
        exibir(resultado);
}
document.getElementById('btnBusca').addEventListener('click', pesquisar);
document.getElementById('campoBusca').addEventListener('keyup', pesquisar);
carregar();
function pesquisar() {
    const texto = document.getElementById('campoBusca').value.toLowerCase();
    
    document.querySelector('.banner').style.display = texto ? 'none' : 'block';

    const resultado = produtos.filter(p => p.title.toLowerCase().includes(texto));
    exibir(resultado);
}