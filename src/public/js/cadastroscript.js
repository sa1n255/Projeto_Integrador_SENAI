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
			if (input[3].value.length < 10) {
				setError(3);
			} else {
				removeError(3);
			}
		}
		function cepvalidar() {
			if (input[4].value.length < 8) {
				setError(4);
			} else {
				removeError(4);
			}
		}
		function telefonevalidar() {
			if (input[13].value.length < 10) {
				setError(13);
			} else {
				removeError(13);
			}
		}
		function ValidarCPF() {
			if (input[1].value.length < 11) {
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
