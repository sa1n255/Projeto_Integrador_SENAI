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

	/*
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
		*/
		function listatabela(){
			let tbody = document.getElementById("tbody-resultado");

			let tr = tbody.insertRow();

			let td_crm = tr.insertCell();
			let td_cnpj = tr.insertCell();
			let td_especialidade = tr.insertCell();
			let td_endereco = tr.insertCell();
			let td_dia = tr.insertCell();
			let td_hora = tr.insertCell();
			
			td_crm.innerText = "12345678";
			td_cnpj.innerText = "3519956151";
			td_especialidade.innerText = "cardiologista";
			td_endereco.innerText = "rua tao jobin";
			td_dia.innerText = "29/11";
			td_hora.innerText = "19:47";
			
		}