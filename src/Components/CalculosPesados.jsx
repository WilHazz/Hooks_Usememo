import { useState } from "react";

const getCalculo = (listaNumeros) => {
  console.log("calculando");
  return listaNumeros.reduce((a, b) => a * b);
};

const agregarNumero = () => {
  listaNumeros[length - 1] + 1;
};

export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h2>Calculo: </h2>
      <p>{getCalculo(listaNumeros)}</p>
      <button onClick={() => setShow(!show)}>{show ? "show" : "Hide"}</button>
      <button onClick={() => agregarNumero()}>Agregar Número</button>
    </>
  );
};
