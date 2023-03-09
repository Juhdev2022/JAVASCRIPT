 function verificarFibonacci() {
      let num = parseInt(document.getElementById("numero").value);

      if (isNaN(num)) {
        document.getElementById("resultado").innerHTML =
          "Por favor, digite um número válido.";
        return;
      }

      let fib1 = 0;
      let fib2 = 1;
      let fib = fib1 + fib2;

      while (fib <= num) {
        if (fib === num) {
          document.getElementById(
            "resultado"
          ).innerHTML = `${num} pertence à sequência de Fibonacci.`;
          return;
        }
        fib1 = fib2;
        fib2 = fib;
        fib = fib1 + fib2;
      }

      document.getElementById(
        "resultado"
      ).innerHTML = `${num} não pertence à sequência de Fibonacci.`;
    }