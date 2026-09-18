let =[];

async function carregar(){
    const resposta = await fecht('https://dummyjson.com/products');  
    const dados = await resposta.json();
    produtos =dados.produtos;
    exibir(produtos);


}