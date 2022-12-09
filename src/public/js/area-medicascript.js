const form = document.getElementById("login-form");
const input = document.querySelectorAll(".input-form");
const table = document.getElementById("registroconsulta");

  function setError(index) {
    input[index].style.border = "4px solid #e63636";
    
  }

  function removeError(index) {
    input[index].style.border = "";
    
  }
  function MascaraCNPJ(cnpj){
    if(mascaraInteiro(cnpj)==false){
        event.returnValue = false;
    }       
    return formataCampo(cnpj, '00000000000000', event);
  }
  function ValidarCPF() {
    if (input[0].value.length < 11) {
    setError(0);
  } else {
    removeError(0);
  }
  }

  function cnpjvalidar(){
  if (input[1].value.length < 11) {
    setError(1);
  } else {
    removeError(1);
  }
  }


  function crmvalidar() {
  if (input[2].value.length < 8) {
    setError(2);
  } else {
    removeError(2);
  }
}

function listatabela(){
  let tbody = document.getElementById("tbody-resultado");

  let tr = tbody.insertRow();

  let td_nome_medico = tr.insertCell();
  let td_nome_paciente = tr.insertCell();
  let td_especialidade = tr.insertCell();
  let td_nome_hospital = tr.insertCell();
  let td_medicamento = tr.insertCell();
  let td_diagnostico = tr.insertCell();
  let td_exame = tr.insertCell();
  let td_observacao = tr.insertCell();

   td_nome_medico.innerText = "henrique";
   td_nome_paciente.innerText = "samuel";
   td_especialidade.innerText = "cardiologia";
   td_nome_hospital.innerText = "roberto gil";
   td_medicamento.innerText = "bezentacil";
   td_diagnostico.innerText = "o cara ta passando mal! socoroo aaaaaaaaaaaaaaaaaaa";
   td_exame.innerText = "dedada do novembro azulaaaaaaaaaaaaaaaaaaaaaa";
   td_observacao.innerText = "o cara muito malaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
}

const selecionado = document.getElementById("selecionado");
selecionado.addEventListener("change", function () {
if (selecionado.value == "cadastrar"){
  window.location.href = "/area-medica";
}else{ 
  window.location.href = "/consulta";
}
});
/*codigo para ativar a notificação rápida (quando tiver tempo pegar os errors para exibir aqui pelo inner.text)*/
const btn = document.getElementById("butao");
const divMessage = document.querySelector(".alert");

const msg = "Cadastro realizado com sucesso!";

function ativar(msg) {
const message = document.createElement("div");
message.classList.add("message");
message.innerText = msg;
divMessage.appendChild(message);

setTimeout(() => {
  message.style.display = "none";
}, 3000);
}

btn.addEventListener("click", () => {
ativar(msg);
});
