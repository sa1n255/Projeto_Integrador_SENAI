    const form = document.getElementById("login-form");
    const input = document.querySelectorAll(".input-form");
    const table = document.getElementById("registroconsulta");
    table.style.display = "none"      
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
      function tirarform(){
        const form = document.getElementById("formulario-areamed");
        const table = document.getElementById("registroconsulta");
        form.style.display = "none";
        table.style.display = "block"
    }
      function colocaform(){
      const form = document.getElementById("formulario-areamed");
      const table = document.getElementById("registroconsulta");
      form.style.display = "flex";
      table.style.display = "none"
  }


    function listatabela(){
        let tbody = document.getElementById("tbody-resultado");

        let tr = tbody.insertRow();

        let td_cpf= tr.insertCell();
        let td_cpnj = tr.insertCell();
        let td_crm = tr.insertCell();
        let td_diagnostico = tr.insertCell();
        let td_medicamento = tr.insertCell();
        let td_exame = tr.insertCell();
        let td_observacao = tr.insertCell();

       td_cpf.innerText = "15550007703";
       td_cpnj.innerText = "15196516";
       td_crm.innerText = "12345678";
       td_diagnostico.innerText = "o cara ta passando mal!";
       td_medicamento.innerText = "bezentacil";
       td_exame.innerText = "dedada do novembro azul";
       td_observacao.innerText = "o cara muito mal";
    }

    const selecionado = document.getElementById("selecionado");
    selecionado.addEventListener("change", function () {
    if (selecionado.value == "cadastrar"){
      colocaform()
    }else{ tirarform()}
    });