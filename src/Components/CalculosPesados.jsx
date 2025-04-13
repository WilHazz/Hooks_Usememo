const getCalculo = (listaNumeros) => {
  console.log("calculando");
  return listaNumeros.reduce((a, b) => a * b);
};

export const CalculosPesados = () => {
  const listaNumeros = [1, 2, 3, 4, 5];

  return (
    <>
      <h2>Calculo: </h2>
      <p>{getCalculo(listaNumeros)}</p>
      <button onClick={(setShow) => !show}>{show ? "show" : "Hide"}</button>
    </>
  );
};
