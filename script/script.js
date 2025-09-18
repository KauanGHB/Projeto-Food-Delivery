const btnsComprar = document.querySelectorAll('.btnComprar');
const carrinho = document.getElementById('carrinho');

function getProdutoData(btn) {
    const produtoSection = btn.closest('.produto1');
    const infoProduto = produtoSection.querySelector('.infoProduto1');
    const nomeProduto = infoProduto.querySelector('h1').innerText;
    const valor = infoProduto.querySelector('p').innerText;
    const img = produtoSection.querySelector('img'); // Seleciona a imagem correta
    return { nomeProduto, valor, img };
}
btnsComprar.forEach(
    (btn, index) => {
    btn.addEventListener('click', () => {
    const { nomeProduto, valor, img } = getProdutoData(btn);
    const orderPedido = Math.floor(Math.random() * 9000) + 1000;

    const imgCarrinho = document.querySelector('#carrinho .imgBurguer');
    imgCarrinho.setAttribute("src", img.src);

    carrinho.style.visibility = "visible";
    InserirDadosDoPedido(orderPedido, nomeProduto, valor, img);
    });
});

function InserirDadosDoPedido(
    orderPedido , nomeProduto , valor , img
)
{
    let orderCarrinho = document.getElementById('orderId')
    let addTitleProduto = document.getElementById('titleProduto')
    let valorTotal = document.getElementById("valorTotal")
    valorTotal.innerHTML = valor
    orderCarrinho.innerHTML = '#' + orderPedido
    addTitleProduto.innerHTML = nomeProduto
}
