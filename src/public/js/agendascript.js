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