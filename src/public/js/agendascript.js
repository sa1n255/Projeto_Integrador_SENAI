

const form = document.getElementById("login-form");
const input = document.querySelectorAll(".input-form");

function setError(index) {
    input[index].style.border = "4px solid #e63636";

}

function removeError(index) {
    input[index].style.border = "";

}
function crmvalidar() {
    if (input[0].value.length < 8) {
        setError(0);
    } else {
        removeError(0);
    }
}


const results = document.querySelector("#tbody-resultado");

fetch('http://localhost:8080/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(data => {
            const crm = `<h3>${data.crm}</h3>`;
            const nome = `<h3>${data.nome}</h3>`;
            const idade = `<h3>${data.idade}</h3>`;
            results.insertAdjacentHTML("beforeend", crm);
        });
    })