const form = document.getElementById("login-form");
        const input = document.querySelectorAll(".input-form");      
        function setError(index) {
            input[index].style.border = "4px solid #e63636";
            
        }

        function removeError(index) {
            input[index].style.border = "";
            
        }

        function ValidarCPF() {
        var cpf = input[0].value;
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
          setError(0);
        } else {
          removeError(0);
        }
      }

      function cnpjvalidar(){
        var cnpj = input[1].value;
        var valida = new Array(6,5,4,3,2,9,8,7,6,5,4,3,2);
        var dig1= new Number;
        var dig2= new Number;

        exp = /\.|\-|\//g
        cnpj = cnpj.toString().replace( exp, "" ); 
        var digito = new Number(eval(cnpj.charAt(12)+cnpj.charAt(13)));

        for(i = 0; i<valida.length; i++){
                dig1 += (i>0? (cnpj.charAt(i-1)*valida[i]):0);  
                dig2 += cnpj.charAt(i)*valida[i];       
        }
        dig1 = (((dig1%11)<2)? 0:(11-(dig1%11)));
        dig2 = (((dig2%11)<2)? 0:(11-(dig2%11)));

        if(((dig1*10)+dig2) != digito){
            setError(1);
        } else {
          removeError(1);
        }
      }