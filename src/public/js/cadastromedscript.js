    /*validação do formulario*/
    const form = document.getElementById("login-form");
    const input = document.querySelectorAll(".input-form");
    const span = document.querySelectorAll(".span");

    function setError(index) {
        input[index].style.border = "4px solid #e63636";
    }   

    function removeError(index) {
        input[index].style.border = "";
    }
        
    function nomevalidar() {
        if (input[0].value.length < 10) {
            setError(0);
        } else {
            removeError(0);
        }
    }
    function emailvalidar() {
        if (input[5].value.length < 10) {
            setError(5);
        } else {
            removeError(5);
        }
    }
    function crmvalidar() {
        if (input[1].value.length < 8) {
            setError(1);
        } else {
            removeError(1);
        }
    }
    function rgvalidar() {
        if (input[2].value.length < 9) {
            setError(2);
        } else {
            removeError(2);
        }
    }
    function ValidarCPF() {
        if (input[3].value.length < 11) {
            setError(3);
        } else {
            removeError(3);
        }
    }
    function especialidadevalidar() {
        if (input[4].value.length < 5) {
            setError(4);
        } else {
            removeError(4);
        }
    }
    function telefonevalidar() {
        if (input[5].value.length < 10) {
            setError(5);
        } else {
            removeError(5);
        }
    }


        
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

    function senhaValida(){
        const senha = document.getElementById("senha");
        const resultado = senha.value;
        var retorno = false;
        var letrasMaiusculas = /[A-Z]/;
        var letrasMinusculas = /[a-z]/; 
        var numeros = /[0-9]/;
        var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    

        var auxMaiuscula = 0;
        var auxMinuscula = 0;
        var auxNumero = 0;
        var auxEspecial = 0;
    
        for(var i=0; i<resultado.length; i++){
        if(letrasMaiusculas.test(resultado[i]))
        auxMaiuscula++;
        else if(letrasMinusculas.test(resultado[i]))
        auxMinuscula++;
        else if(numeros.test(resultado[i]))
        auxNumero++;
        else if(caracteresEspeciais.test(resultado[i]))
        auxEspecial++;
        }
        if (auxMaiuscula > 0){
        if (auxMinuscula > 0){
        if (auxNumero > 0){
        if (auxEspecial>0) {
        retorno = true;
        }
        }
        }
        }
        
        if (retorno == false){
            senha.style.border = "4px solid #e63636";
        }else{
            senha.style.border = "";}
            
       }

       
    