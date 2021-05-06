const fibonacci = (number) => {
  let primerN = 0,
    segundoN = 1,
    siguienteN;
  const listaFibonacci = [];

  for (let i = 0; i <= number - 1; i++) {
    listaFibonacci.push(primerN);
    siguienteN = primerN + segundoN;
    primerN = segundoN;
    segundoN = siguienteN;
  }

  console.log(listaFibonacci);
};

fibonacci(10);
