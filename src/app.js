//Utilizar a mesma base para transferir os dados para as variaveis e para o crud
const butao = document.querySelector("#butao");
const nome = document.querySelector("#nome");
const hist = document.querySelector("#hist");

butao.addEventListener("click", function (e) {
    e.preventDefault();

    const nomevalor = nome.value;
    const histvalor = hist.value;
    
    console.log(nomevalor);
    console.log(histvalor);
});
