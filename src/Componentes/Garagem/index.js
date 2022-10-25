import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";
import { useState } from "react";

export function Garagem({ nome, setNome }) {
  const [automovel, setAutomovel] = useState({
    modelo: "Corsa",
    cor: "Branco",
    ano: 2020,
    flex: true
  });

  function mudaNome(nome) {
    setNome(nome);
  }
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={() => mudaNome("Paula")}>Muda nome</Botao>

      <Estacionamento>
        <Carro automovel={automovel} adicionadoPor={nome} />
      </Estacionamento>
    </GaragemContainer>
  );
}
