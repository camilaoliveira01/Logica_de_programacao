// DOM - Manipular HTML


//Maneiras de selecionar o HTML

//document.getElementById() - Selecionar pelo ID
//document.getElementById() - Selecionar pela Teg
//document.getElementById() - Selecionar pela classe
//document.getElementById() Selecionat pela classe, ID ou teg



const from = document.querySelector("#formProduto")

from.addEventListener('submit' , function(event) {
    event.preventDefault()

    const nomeProduto = document.querySelector("#nome").value
    const marca = document.querySelector("#marca").value
    const tamanho = document.querySelector("#tamanho").value
    const preco = document.querySelector("#preco").value
    const quantidade = document.querySelector("#quantidade").value

})

const dados = {
    nomeProduto : nomeProduto,
    marca : marca,
    tamanho : tamanho,
    preco : parseFloat(preco),
    quantidade : parent(quantidade)
}

fetch ('http://localhost:8080/roupa' , {
    method : 'POST',
    headers : {
        "Content- Type" : 'application/jason'
    },

    body : JSON.stringify(dados)
})
    .then(reponse => {
        if(Response.ok) {
            Swal.fire({
                title : "ROUPA CADASTRADA COM SUCESSO" ,
                text: "ROUPA CADASTRADA" ,
                icon : "SUCESS"
            })
        } else {
            Swal.fire({
                title: "ERRO AO CADASTRAR A ROUPA",
                text : "ROUPA NÃO CADASTRADA",
                icon : "error"
            })
        }
    })

    .catch(erro => {
        Swal.fire ({
            title: "ERRO AO CADASTRAR",
            text : "ROUPA NÃO CADSTRADA",
            icon : "error"
        })
    })