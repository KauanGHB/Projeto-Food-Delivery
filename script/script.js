let btnAddCarrinho = document.getElementById("adcionarCarrinho")

btnAddCarrinho.addEventListener('click' , () =>
{    
    let carrinho = document.getElementById('carrinho')
    let nomeProduto = document.getElementById('titleProduto1').innerText
    let valor = document.getElementById('valor').innerText
    let orderPedido = 2345

    carrinho.style.visibility = "visible"

    InserirDadosDoPedido(orderPedido , nomeProduto , valor)
})

 function InserirDadosDoPedido
    (orderPedido , nomeProduto , valor)
{
    let orderCarrinho = document.getElementById('orderId')
    let addTitleProduto = document.getElementById('titleProduto')
    orderCarrinho.innerHTML = '#' + orderPedido
    addTitleProduto.innerHTML = nomeProduto
    // console.log(orderPedido + ',' + nomeProduto + ',' + valor)
}
