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
        var cpf = input[3].value;
        exp = /\.|\-/g;
        cpf = cpf.toString().replace(exp, "");
        var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
        var soma1 = 0,
            soma2 = 0;
        var vlr = 11;

        for (i = 0; i < 9; i++) {
            soma1 += eval(cpf.charAt(i) * (vlr - 1));
            soma2 += eval(cpf.charAt(i) * vlr);
            vlr--;
        }
        soma1 = (soma1 * 10) % 11 == 10 ? 0 : (soma1 * 10) % 11;
        soma2 = ((soma2 + 2 * soma1) * 10) % 11;

        var digitoGerado = soma1 * 10 + soma2;
        if (digitoGerado != digitoDigitado) {
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
        exp = /\(\d{2}\)\ \d{5}\-\d{4}/;
        if (!exp.test(input[5].value)) {
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