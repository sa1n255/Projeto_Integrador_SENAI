    const selecionado = document.getElementById("selecionado");
    selecionado.addEventListener("change", function () {
        window.location.href = "/paciente";
    });

    /*validação do formulario*/
    const form = document.getElementById("login-form");
    const input = document.querySelectorAll(".input-form");
    const span = document.querySelectorAll(".span");

    function setError(index) {
        input[index].style.border = "4px solid #e63636";
        span[index].style.display = "block";
    }   

    function removeError(index) {
        input[index].style.border = "";
        span[index].style.display = "none";
    }
        
    function nomevalidar() {
        if (input[0].value.length < 10) {
            setError(0);
        } else {
            removeError(0);
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
    function senhavalidar() {
        if (input[6].value.length < 6) {
            setError(6);
        } else {
            removeError(6);
        }
    }