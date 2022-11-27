/*efeito*/
let inputs = document.getElementsByClassName("input-form");
for (let input of inputs) {
  input.addEventListener("blur", function () {
    if (input.value.trim() != "") {
      input.classList.add("has-val");
    } else {
      input.classList.remove("has-val");
    }
  });
}

/*validação do formulario*/
const form = document.getElementById("login-form");
const input = document.querySelectorAll(".input-form");
const span = document.querySelectorAll(".span");
const change = document.getElementById("butaologin");

function changebutao() {
    const crm = document.getElementById("crm").value;
    const senha = document.getElementById("senha").value;

    if (crm == "" || senha == ""){
        alert("erro");
    }else{
    change.type = "submit";
    }
}

function setError(index) {
  input[index].style.border = "3px solid #e63636";
  span[index].style.display = "block";
}

function removeError(index) {
  input[index].style.border = "";
  span[index].style.display = "none";
}

function crmvalidade() {
  if (input[0].value.length < 8) {
    setError(0);
  } else {
    removeError(0);
  }
}
function senhavalidade() {
  if (input[1].value.length < 6) {
    setError(1);
  } else {
    removeError(1);
  }
}
/*redirecionamento caso a o crm esteja certo */
// let butao = document.getElementById("butao");

// butao.addEventListener("click", function (e) {
//     e.preventDefault();
//     const crm = document.getElementById("crm").value;
//     const senha = document.getElementById("senha").value;

//     if (crm == 12345678 && senha == 123456) {
//         alert("Login efetuado com sucesso")
//         window.location.href = "/area-medica";
//     } else {
//         alert("Erro, login não afetuado com sucesso");
//         for(var i = 0; i<2; i++){
//         input[i].value = "";
//         removeError(i);
//         }
//     }
// });
