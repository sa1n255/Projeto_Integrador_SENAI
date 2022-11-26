
            const selecionado = document.getElementById("selecionado");
            selecionado.addEventListener('change', function() {
            window.location.href="/cadastromed";
            });

        /*validação do formulario*/
        const form = document.getElementById("login-form");
        const input = document.querySelectorAll(".input-form");

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
            if (input[4].value.length < 10) {
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