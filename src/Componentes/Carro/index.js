import { CarroContainer } from "./styles";

export function Carro({ automovel, adicionadoPor }) {
  const { modelo, cor, ano, flex } = automovel;
  return (
    <CarroContainer>
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  );
}
